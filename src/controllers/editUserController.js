export default function makeEditUserController({editUser}){
    return async function editUserController(httpRequest){
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            //User can only change his name. :p 
            const { name } = httpRequest.body;
            const id = httpRequest.params.id;
            const user = await editUser({ id, name });
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