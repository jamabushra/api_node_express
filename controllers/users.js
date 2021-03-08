import { v4 as uuidv4 } from 'uuid';

let users = [
    // {
    //     firstName: "yoda",
    //     lastName: "justYoda",
    //     age: 1000
    // },
    // {
    //     firstName: "Luke",
    //     lastName: "Skywalker",
    //     age: 89
    // }
]

export const getUsers = (req, res) => { //each call back function in express has the req=request and res=response objects
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    const userWithId = { ...user, id: uuidv4() }; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    users.push(userWithId);

    res.send(`User with the name ${user.firstName} was added to the database!`);
}

export const getSpecificUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} was deleted from the database`)
}

export const updateUser = (req, res) => { //our update router we use patch  
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;


    res.send(`User with the id ${id} was succefully updated`);
}