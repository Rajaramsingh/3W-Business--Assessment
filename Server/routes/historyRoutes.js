const express = require('express');
const router = express.Router();
const {getHistory} = require('../Controllers/historyController');

// GET /history : get user claim history
router.get('/', getHistory);

module.exports = router;
