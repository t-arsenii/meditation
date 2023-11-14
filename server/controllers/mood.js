const MoodModel = require('../models/Mood');

const addMoodRecord = async (req, res) => {
  const { date, mood } = req.body;

  try {
    const moodRecord = new MoodModel({ date, mood });
    await moodRecord.save();
    res.status(201).send('Mood record added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  addMoodRecord,
};
