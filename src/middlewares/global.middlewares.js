import userService from '../services/user.service.js';

export const validUser = async (req, res, next) => {
    const params = req.params;
    try {

        const user = await userService.findOne(params);
        
        if(!user){
            return res.status(400).send({local: 'On middleware', message: 'User not found'});
        }

        req.user = user;

        next();
    }
    catch(err) {
        return res.status(404).send({local: 'On middleware', error: err });
    }
};