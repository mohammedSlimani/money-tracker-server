export default function makeAuthUserController({ authUser }){
    return async function addAuthController(httpRequest){
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const user = await authUser({name, email, facebookId } = httpRequest);
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