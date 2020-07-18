const mongoose = require('mongoose');
const { Schema } = mongoose;
// const userSchema = require('./User');

const jobSchema = new Schema({
    name: String,
    position: String,
    location: String,
    // This is a string because the pay can vary by hour
    pay: String,
    postDate: Date,
    expireDate: Date,
    usersApplied: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
});

const groupSchema = new Schema({
    name: String,
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    jobs: [jobSchema],
});

const group = mongoose.model('group', groupSchema);
module.exports = group;
