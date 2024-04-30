import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    preferences: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', UserSchema);

export default User;