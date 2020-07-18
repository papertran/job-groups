const userController = require('../controllers/user_controller');

module.exports = (app) => {
    app.post('/api/user', userController.create);
};
