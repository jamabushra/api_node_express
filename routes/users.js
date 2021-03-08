//find below a back end rest api using node.js, express.js, and postman
/*WHAT OUR API WILL DO AND HOW IT WILL LOOK
purpose: handling users in a database which is something we will do in each and every application
how it will look:
each of the below will be a 'route' so we will be making 5 different routes
- GET: /users *finds all users
- POST: /users *creates a user
- GET: /users/:id *finds users data (for a specific user using id)
- DELETE: /users/:id *deletes a user (for a specific user using id)
- PATCH: /users/:id *updates a user (for a specific user using id)
*/
import express from 'express';

import { createUser, getUsers, getSpecificUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router(); // this initialises our router

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getSpecificUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router; //we're exporting it so we can make use of it in our index.js file, to import it in index.js use [import usersRoutes from './routes/users.js';] 