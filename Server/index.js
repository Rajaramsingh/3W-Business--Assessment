const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

connectDB(); // connect to database

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
