const userController = require('../controllers/user_controller');

module.exports = (app) => {
    app.get('/api/user', userController.index);
    app.post('/api/user', userController.create);
};
