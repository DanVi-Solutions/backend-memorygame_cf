const User = require('../models/User');

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findOne = (params) => User.findOne(params);

module.exports = {
    createService,
    findAllService,
    findOne,
};