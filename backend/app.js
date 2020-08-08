const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
const routes = require('./routes/routes');
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

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

module.exports = app;
