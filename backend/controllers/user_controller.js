const user = require('../models/User');

module.exports = {
    /* userProps = {
        "email"
    }*/
    index(req, res, next) {
        const email = req.body;

        user.findOne(email)
            .populate({
                path: 'group',
                populate: {
                    path: 'users',
                    model: 'user',
                },
            })
            .then((user) => res.send(user))
            .catch(next);
    },

    /* userProps = {
        "name",
        "email",
        "googleId" 
    }*/
    create(req, res, next) {
        const userProps = req.body;
        user.create(userProps)
            .then((user) => res.send(user))
            .catch(next);
    },
};
