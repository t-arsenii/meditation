const express = require('express');
const router = express.Router();
const moodController = require('../controllers/mood');

router.post('/addMood', moodController.addMoodRecord);

module.exports = router;
