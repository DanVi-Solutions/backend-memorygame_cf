const userService = require('../services/user.service');

const create = async (req, res) => {
    const {name, email, preferences} = req.body;
    try {
        if(!name || !email || !preferences){
            res.status(400).send({message: 'Submit all fields for registration'})
        }

        const user = await userService.createService(req.body);

        if(!user){
            return res.status(400).send({local: 'On req', message: 'Error creating User' });
        }

        res.status(201).send({ message: 'User created sucefully', user: user });
    }
    catch (err){
        res.status(404).send({ error: err });  
    }
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService();

        if(users.length === 0){
            return res.status(400).send({ message: 'There are no registered users'});
        };

        res.status(200).send(users);
    }
    catch (err){
        res.status(404).send({ error: err });
    }
};

const findOne = async (req, res) => {
    try {

        const user = req.user;

        res.status(200).send(user);
    }
    catch(err){
        res.status(404).send({local: 'On req', error: err });
    }
};

module.exports = { create, findAll, findOne };