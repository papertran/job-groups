const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();

mongoose.Promise = global.Promise;

// This is to be able to run mocha tests
if ((process.env, NODE_ENV !== 'test')) {
    mongoose.connect(keys.mongoURI);
}

app.use(bodyParser);

module.exports = app;
