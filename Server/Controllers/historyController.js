const History  = require('../models/History');
 
// get all points claim history

const getHistory = async (req , res) => {
    try {
        const history = await History.find().sort({ claimedAt: -1 }); // sort by claimedAt in descending order
        res.json(history);
    }
    catch (error) {
         res.status(500).json({ error: 'Failed to fetch history' });
  }
    }

    // create new history entry when points are claimed
    const createHistory = async (userId, userName, Points) => {
        try {
            await History.create({
                userId,
                userName,
                Points
            })
        }
        catch (error) {
            console.error('Failed to create history entry:', error);
        }
    }

    module.exports = {
        getHistory,
        createHistory
    }