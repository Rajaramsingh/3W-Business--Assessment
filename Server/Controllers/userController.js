const User = require('../models/Users');
const {getUsersWithRanks} = require('../utils/helpers');

// get all user with their ranks
const getAllUsers = async (req, res) => {
    try {
        const users = await getUsersWithRanks();
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error getting all users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// craete new user

const addUser = async (req, res) => {
    try {
        const {name} = req.body;

         // check if user name is provided

         if(!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ error: "Name is required and must be a non-empty string" });
    }

    // create new user
    const newUser = new User({name : name.trim()});
    await newUser.save();
    
    // get updated user list with ranks
    const users = await getUsersWithRanks();
    res.json({user : newUser, users});
}
catch (error) {
    res.status(500).json({error: 'failed to add user'})
}
};

// claim random points for a user

const claimPoints = async (req, res) => {
    try {
        const {userId} = req.body;

        // check if userId is provided or not
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        // find user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // generate random points between 1 and 10
        const randomPoints = Math.floor(Math.random() * 10) + 1;
       // update user's points
       user.Points += randomPoints;
       await user.save();

       // get updated user list with ranks
       const users = await getUsersWithRanks();

       res.json({
        users, 
        claimPoints: randomPoints,
        userId: user._id,
        userName: user.Name,
        
       })
    } catch (error) {
        res.status(500).json({ error: 'Failed to claim points' });
    }
};

module.exports = {
    getAllUsers,
    addUser,
    claimPoints
}