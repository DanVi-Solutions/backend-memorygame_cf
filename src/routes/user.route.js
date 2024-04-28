import express from 'express';
const router = express.Router();

import userController from '../controllers/user.controller.js';

import { validUser } from '../middlewares/global.middlewares.js';

router.post('/', userController.create);
router.get('/', userController.findAll);
router.get('/:email', validUser, userController.findOne);

export default router;