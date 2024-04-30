import express from 'express';
const userRouter = express.Router();

import userController from '../controllers/user.controller.js';

import { validUser } from '../middlewares/global.middlewares.js';

userRouter.post('/createUser', userController.createUser);
userRouter.get('/findAll', userController.findAll);
userRouter.get('/:email', validUser, userController.findOne);

export default userRouter;