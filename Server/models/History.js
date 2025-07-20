const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    Points : {
        type: Number,
        required: true
    },
    claimedAt : {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('History', historySchema);