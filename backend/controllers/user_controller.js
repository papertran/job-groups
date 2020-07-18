const user = require('../models/User');
const { estimatedDocumentCount } = require('../models/User');

module.exports = {
    index(req, res, next) {
        console.log(req);
    },
    create(req, res, next) {
        // console.log('GET THIS');
        console.log(req.body);

        const userProps = req.body;
        user.create(userProps)
            .then((user) => res.send(user))
            .catch(next);
    },
};
