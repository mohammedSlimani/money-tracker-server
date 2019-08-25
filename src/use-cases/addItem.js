import makeItem from "../item";
import makeUser from "../user";

export default function makeAddItem({ usersDb }){
    return async function addItem({id, item}){
        const mItem = makeItem( {title: item.title, price: item.price});
        const user = await usersDb.findById({id});
        if(!user){
            throw new Error('user to add item to doesnt exist')
        }
        return await usersDb.addItem({
            item,
            id 
        });
    }
}