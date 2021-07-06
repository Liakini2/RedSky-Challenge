import axios from 'axios';
import express from 'express';
import { Result, CreatedUser } from '../models/model';

let userId = 0;
let userList: CreatedUser[] = [];

async function initiateUserList() {
    const url = new URL(`https://reqres.in/api/users`);
    let result = await axios.get(`${url}?page=1`);
    userList = [...userList, ...result.data.data];
    result = await axios.get(`${url}?page=2`);
    userList = [...userList, ...result.data.data];
    for (let i = 0; i < userList.length; i++) {
        if (userId < userList[i].id) {
            userId = userList[i].id
        };
    };
};

export const getUsers = async (req: express.Request, res: express.Response<Result>) => {
    if (userList.length < 1) {
        await initiateUserList();
    };
    return res.status(200).send({ data: userList });
};

export const createUser = (req: express.Request<CreatedUser>, res: express.Response<Result>) => {
    const { first_name, last_name, avatar, email } = req.body;
    let newUser = {
        id: ++userId, first_name, last_name, avatar, email
    };
    userList.push(newUser);
    console.log(userList);
    return res.status(201).send(userList);
};

export const updateUser = (req: express.Request<CreatedUser>, res: express.Response<Result>) => {
    const { first_name, last_name, avatar, email } = req.body;
    const index = userList.findIndex((elem) => { return elem.id === +req.params.id });
    if (index < 0) {
        return res.status(404).send('Not modified.');
    };
    userList[index] = {
        id: userList[index].id,
        first_name: first_name || userList[index].first_name,
        last_name: last_name || userList[index].last_name,
        avatar: avatar || userList[index].avatar,
        email: email || userList[index].email
    };
    console.log(userList);
    return res.status(200).send(userList);
};

export const deleteUser = (req: express.Request, res: express.Response) => {
    const index = userList.findIndex((elem) => { return elem.id === +req.params.id });
    if (index < 0) {
        return res.status(404).send('Unable to delete.');
    };
    userList.splice(index, 1);
    return res.status(200).send(userList);
};
