import makeEditItem from "./editItem";
import usersDb from "../data-access"
import makeAddItem from "./addItem";
import makeAuthUser from "./authUser";
import makeEditUser from "./editUser";
import makeRemoveItem from "./removeItem";
import makeRemoveUser from "./removeUser";

const addItem = makeAddItem({usersDb});
const editItem = makeEditItem({usersDb});
const authUser = makeAuthUser({usersDb});
const editUser = makeEditUser({usersDb});
const removeItem = makeRemoveItem({usersDb});
const removeUser = makeRemoveUser({usersDb});

const userService = Object.freeze({
    addItem,
    editItem,
    authUser,
    editUser,
    removeItem,
    removeUser
})

export default userService;

export {
    addItem,
    editItem,
    authUser,
    editUser,
    removeItem,
    removeUser
}