const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  date: Date,
  mood: String,
});

const MoodModel = mongoose.model('Mood', moodSchema);

module.exports = MoodModel;
