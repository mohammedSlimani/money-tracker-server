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

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.listen(PORT,()=> console.log('Server started on port',PORT));

export default app;
