import mongodb from 'mongodb';
import makeUsersDb from './usersDb';

const MongoClient = mongodb.MongoClient;
const url = process.env.DB_URL || 'mongodb://127.0.0.1:27017';
const dbName = process.env.DB_NAME || 'dareat';
const client = new MongoClient(url, { useNewUrlParser: true });

async function makeDb() {
    if (!client.isConnected()) {
        await client.connect();
    }
    return client.db(dbName);
}

const usersDb = makeUsersDb({ makeDb })