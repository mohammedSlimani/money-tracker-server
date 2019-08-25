import Id from "../Id";

export default function makeUserDb({ makeDb }) {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        insert,
        remove,
        update,
        addItem,
        removeItem
    })
    async function findAll() {
        const db = await makeDb();
        const result = await db.collection('users').find({});
        return result;
    }

    async function findById({ id: _id }) {
        const db = await makeDb();
        const result = await db.collection('users').findOne({ _id });
        return result;
    }

    async function findByEmail({ email }) {
        const db = await makeDb();
        const result = await db.collection('users').findOne({ email });
        return result;
    }

    async function insert({ id: _id, ...userInfo }) {
        const db = await makeDb();
        const result = await db.collection('users').insertOne({ _id, ...userInfo })
        return result.ops[0];
    }

    async function remove({ id: _id }) {
        const db = await makeDb();
        const result = await db.collection('users').deleteOne({ _id });
        return result;
    }

    //Since I can't change a whole array with this function I have to make specific ones
    async function update({ id: _id, ...changes }) {
        const db = await makeDb();
        const result = await db.collection('users').findOneAndUpdate(
            { _id },
            { $set: { ...changes } },
            { returnOriginal: false }
        )
        return result.value
    }

    async function addItem({ id: _id, item }) {
        const db = await makeDb();
        const updated = await db.collection('users').updateOne(
            { _id },
            { $push: { items: { ...item } } },
            { returnOriginal: false }
        )
        return updated.result;
    }

    async function removeItem({userId: _id, itemId}){
        const db = await makeDb();
        const updated = await db.collection('users').updateOne(
            { _id },
            { $pull: { items : { id: itemId } } },
            { returnOriginal: false }
        )
        return updated.result;
    }
}