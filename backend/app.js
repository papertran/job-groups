const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;

//
if ((process.env, NODE_ENV !== 'test')) {
    mongoose.connect('mongodb://localhost/job_groups');
}
