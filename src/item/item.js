export default function makeBuildItem({ Id }){
    return function buildItem({
        id = Id.makeId(),
        title,
        price,
        dateAdded = Date.now()
    }){
        if(!Id.isValidID()){
            throw new Error('Item must have a valid Id')
        }
        if(!title){
            throw new Error('Item must have a title')
        }
        if(!price){
            throw new Error('Item must have a price')
        }
        if(isNaN(price)){
            throw new Error('Price should be a number')
        }

        return Object.freeze({
            getId: ()=> id,
            getTitle: ()=> title,
            getPrice: ()=> price,
            getDate: ()=> dateAdded
        })

    }
}