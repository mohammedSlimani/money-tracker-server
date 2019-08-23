export default function makeEditItemController(editItem){
    return async function editItemController(httpRequest){
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const { title, price } = httpRequest.body;
            const id = httpRequest.params.id;
            const user = await editItem({ id, item: { title, price } } );
            return {
                headers,
                statusCode: 200,
                body: {
                    ...user
                }
            }

        } catch (e) {
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}