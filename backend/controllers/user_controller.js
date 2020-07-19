const user = require('../models/User');

module.exports = {
    /* userProps = {
        "email"
    }*/
    index(req, res, next) {
        const userProps = req.body;
        user.findOne(userProps)
            .then((user) => res.send(user))
            .catch(next);
    },

    /* userProps = {
        "name",
        "googleId" 
    }*/
    create(req, res, next) {
        const userProps = req.body;
        user.create(userProps)
            .then((user) => res.send(user))
            .catch(next);
    },
};
