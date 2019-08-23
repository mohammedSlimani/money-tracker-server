import {
    addItem,
    authUser,
    editItem,
    editUser,
    removeItem,
    removeUser
} from '../use-cases'

import makeAddItemController from './addItemController'
import makeAuthUserController from './authUserController';
import makeEditItemController from './editItemController';
import makeRemoveItemController from './removeItemController';
import makeEditUserController from './editUserController';
import makeRemoveUserController from './removeUserController';

const addItemController = makeAddItemController({addItem});
const authUserController = makeAuthUserController({authUser});
const editItemController = makeEditItemController({editItem});
const removeItemController = makeRemoveItemController({removeItem});
const editUserController = makeEditUserController({editUser});
const removeUserController = makeRemoveUserController({removeUser});

const userControllers = Object.freeze({
    addItemController,
    authUserController,
    editItemController,
    editUserController,
    removeItemController,
    removeUserController
})

export default userControllers;

export {
    addItemController,
    authUserController,
    editItemController,
    editUserController,
    removeItemController,
    removeUserController
}
