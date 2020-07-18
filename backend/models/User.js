const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
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
