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

SEE ALL THE CREATED ROUTES IN THE 'users.js' file unders routes folder and all the logic in the 'users.js' file under controllers folder
*/
import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();//our entire app is going to reside in here
const PORT = 5000; //front end is usually 3000 so we will use 5000 for this back end api

app.use(bodyParser.json()); // this just says that we are using json data in our whole application 

app.use('./users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); //makes our application listen for incoming requests
    //this function executed once we run our server


