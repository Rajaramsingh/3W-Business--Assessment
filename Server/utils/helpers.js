const User = require('../models/Users');

// helper function to get user with rank
const getUsersWithRanks = async () => {
    try {
       
        const users = await User.find();

        // sort users by points in descending order

        users.sort((a, b) => b.Points - a.Points); 

        // add ranks to each users
        return users.map((user, id) => ({
            id: user._id,
            name: user.Name,
            points: user.Points,
            rank: id + 1

        }));
    }
        catch (error) {
            console.error("error getting users with ranks:", error);
            return [];
        }
    
};

// initialize defaults user if database is empty
const initializeUsers = async () => {
    const defaultUsers = [Rajaram, Anupam, Abhishek, Manish, Prashant, Krishna, Abhigyan,Kriti, Muskan, Arushi ];
    try {
        const userCount = await User.countDocuments();
        if(userCount === 0) {
            const createUsers = defaultUsers.map(name => ({name}))

        }
        await User.insertMany(createUsers);
        console.log("Default users initialized successfully");
    }
    catch (error) {
        console.error("Error initializing default users:", error);
    }
};
module.exports = {
    getUsersWithRanks,
    initializeUsers
}