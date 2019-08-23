export default function makeRemoveUser({ usersDb }){
    return async function removeUser({id}){
        const exist = await usersDb.findById({id});
        if(!exist){
            throw new Error('User to delete doesnt exist');
        }
        return await usersDb.remove({id});
    }
}