const userController = require('../controllers/user_controller');

module.exports = (app) => {
    app.post('/api/users', userController.create);
};
