const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser'); // parse cookie header

const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const keys = require('./config/keys');
const routes = require('./routes/routes');
const authRoutes = require('./routes/authRoutes');
const app = express();

require('./services/passport');
mongoose.Promise = global.Promise;

// This is to be able to run mocha tests
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

app.use(
    cookieSession({
        name: 'session',
        keys: [keys.cookieKey],
        maxAge: 24 * 60 * 60 * 100,
    })
);

// parse cookies
app.use(cookieParser());

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: 'http://localhost:3000', // allow to server to accept request from different origin
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // allow session cookie from browser to pass through
    })
);
routes(app);
authRoutes(app);

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            authenticated: false,
            message: 'user has not been authenticated',
        });
    } else {
        next();
    }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get('/', authCheck, (req, res) => {
    res.status(200).json({
        authenticated: true,
        message: 'user successfully authenticated',
        user: req.user,
        cookies: req.cookies,
    });
});

module.exports = app;
