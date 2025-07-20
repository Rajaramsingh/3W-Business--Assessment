const mongoose = require('mongoose');

const connectDB = async function () {
    try {
        await mongoose.connect(process.env.MONGODB_URL, )
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }

}

module.exports = connectDB;