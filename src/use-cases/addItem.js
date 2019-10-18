import { makeItem } from "../entities";

export default function makeAddItem({ usersDb }){
    return async function addItem({id, item}){
        if(!id){
            throw new Error('You have to provide the Id of the user you want to add the item to')
        }
        const mItem = makeItem( {title: item.title, price: item.price});
        const user = await usersDb.findById({id});
        if(!user){
            throw new Error('user to add item to doesnt exist')
        }
        return await usersDb.addItem({
            item:{
                id: mItem.getId(),
                title:mItem.getTitle(),
                price:mItem.getPrice(),
                dateAdded: mItem.getDateAdded()
            },
            id 
        });
    }
}