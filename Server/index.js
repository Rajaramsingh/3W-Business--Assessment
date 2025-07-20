const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const {initializeUsers} = require ('./utils/helpers')
const userRoutes = require('./routes/userRoutes');
const historyRoutes = require('./routes/historyRoutes');

require('dotenv').config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/users', userRoutes);
app.use('/history', historyRoutes);


connectDB(); // connect to database



// Initialize default users
initializeUsers();


app.get('/test', (req, res) => {
  res.send('Server is working!');
});
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
