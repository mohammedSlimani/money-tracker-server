import makeItem from "../item";
import makeUser from "../user";

export default function makeAddItem({ usersDb }){
    return async function addItem({id, item}){
        const mItem = makeItem(item);
        const user = await usersDb.findById({id});
        if(!user){
            throw new Error('user to add item to doesnt exist')
        }
        const mUser = makeUser(user);
        mUser.addItem(item);
        return usersDb.update(mUser);
    }
}