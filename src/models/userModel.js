const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        unique: true,
        required: false,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;