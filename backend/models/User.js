const mongoose = require('mongoose');
const { Schema } = mongoose;

// const groupSchema = require('./Groups');
const { Schema } = require('./Groups');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    googleId: String,
    group: [
        {
            type: Schema.Types.ObjectId,
            ref: 'group',
        },
    ],
});

const user = mongoose.model('user', userSchema);

module.exports = user;
