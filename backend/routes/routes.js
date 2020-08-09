const userController = require('../controllers/user_controller');
const groupController = require('../controllers/group_controller');

module.exports = (app) => {
    app.get('/api/user', userController.index);
    app.post('/api/user', userController.create);

    app.post('/api/group', groupController.createGroup);
    app.post('/api/group/addUser', groupController.addUser);
    app.post('/api/group/addJobs', groupController.addJob);
};
