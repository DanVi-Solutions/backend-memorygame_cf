const route = require('express').Router();
const userController = require('../controllers/user.controller');

const { validUser } = require('../middlewares/global.middlewares');

route.post('/', userController.create);
route.get('/', userController.findAll);
route.get('/:email', validUser, userController.findOne);

module.exports = route;