import { makeDb } from "../src/data-access"
(async function setupDb() {
    console.log('Setting up database...')
    // database collection will automatically be created if it does not exist
    // indexes will only be added if they don't exist
    const db = await makeDb()
    const userResult = await db
        .collection('users')
        .createIndexes([
            { key: { email, facebookId }, unique: true }
        ])
    console.log(userResult)
    console.log('Database setup complete...')
    process.exit()
})()
