const userService = require('../services/user.service');

const create = async (req, res) => {
    const {name, email, preferences} = req.body;
    try {
        if(!name || !email || !preferences){
            res.status(400).send({message: 'Submit all fields for registration'})
        }

        const user = await userService.create(req.body);

        if(!user){
            return res.status(400).send({ message: 'Error creating User' });
        }

        res.status(201).send({ message: 'User created sucefully', user: user });
    }
    catch (err){
        res.status(404).send({ error: err });  
    }
}

module.exports = { create };