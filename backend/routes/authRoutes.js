const passport = require('passport');

const CLIENT_HOME_PAGE = 'http://localhost:3000/Home';
const CLIENT_PAGE_LOGIN = 'http://localhost:3000/';

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: CLIENT_HOME_PAGE,
            // successRedirect: '/auth/login/success',

            failureRedirect: '/auth/google/failed',
        })
    );
    // when login failed, send failed msg
    app.get('/auth/google/failed', (req, res) => {
        res.status(401).json({
            success: false,
            message: 'user failed to authenticate.',
        });
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect(CLIENT_PAGE_LOGIN);
        // res.redirect('auth/login/success');
    });

    // when login is successful, retrieve user info
    app.get('/auth/login/success', (req, res) => {
        if (req.user) {
            res.json({
                success: true,
                message: 'user has successfully authenticated',
                user: req.user,
                cookies: req.cookies,
            });
        }
    });
};
