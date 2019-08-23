import makeUser from "../user";

export default function makeAuthUser({ usersDb }) {
    return async function authUser({ name, facebookId, email } = {}) {
        const user = makeUser({ name, facebookId, email });
        const exist = usersDb.findByEmail({ email });

        if (exist && facebookId === exist.facebookId) {
            return exist
        }
        else if (exist) {
            throw new Error('FaceBookId dont match');
        }

        //If we get here it is because there is no user with this email
        return usersDb.insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            facebookId: user.getFacebookId(),
            items: user.getItems()
        })

    }
}