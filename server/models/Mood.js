const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  username: String,
  date: Date,
  mood: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const MoodModel = mongoose.model('Mood', moodSchema);

module.exports = MoodModel;
