const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Points: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema);