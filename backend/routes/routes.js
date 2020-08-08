const userController = require('../controllers/user_controller');
const groupController = require('../controllers/group_controller');
const passport = require('passport');
module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/user', userController.index);
    app.post('/api/user', userController.create);

    app.post('/api/group', groupController.createGroup);
    app.post('/api/group/addUser', groupController.addUser);
    app.post('/api/group/addJobs', groupController.addJob);
};
