const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
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
