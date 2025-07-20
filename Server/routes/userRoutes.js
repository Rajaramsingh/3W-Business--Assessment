const express = require('express');
const router = express.Router();
const {getAllUsers, addUser, claimPoints} = require('../Controllers/userController');
const {createHistory} = require('../Controllers/historyController');


// GET / users : get all users with their ranks
router.get('/', getAllUsers);

// POST / users : add a new user
router.post('/', addUser);

//POST /claim : claim random points for a user
router.post('/claim', async (req, res) => {
  try {
    const { userId } = req.body;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    
    const User = require('../models/Users');
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const randomPoints = Math.floor(Math.random() * 10) + 1;
    user.Points += randomPoints;
    await user.save();
    
    // Create history record

    await createHistory(user._id, user.Name, randomPoints);
    
    const { getUsersWithRanks } = require('../utils/helpers');
    const users = await getUsersWithRanks();
    
    res.json({
      users,
      claimedPoints: randomPoints,
      userId: user._id,
      userName: user.Name
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to claim points' });
  }
});
module.exports = router;
