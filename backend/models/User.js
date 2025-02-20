const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Use `mongoose.models` to prevent overwriting the model
const User = mongoose.models.User || mongoose.model('User ', UserSchema);

module.exports = User;