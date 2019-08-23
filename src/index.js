import express from 'express';
import bodyParser from 'body-parser';
import {
    addItemController,
    authUserController,
    editItemController,
    editUserController,
    removeItemController,
    removeUserController
} from './controllers'
import makeExpressCallback from './express-callback'

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

//ROUTES
app.post('/users', makeExpressCallback(authUserController))
app.patch('/users', makeExpressCallback(editUserController))
app.delete('/users/:id', makeExpressCallback(removeUserController))
app.post('/users/:id', makeExpressCallback(addItemController))
app.patch('/users/:id/items/:itemId', makeExpressCallback(editItemController))
app.delete('/users/:id/items/:itemId', makeExpressCallback(removeItemController))

app.listen(PORT,()=> console.log('Server started on port',PORT));

export default app;
