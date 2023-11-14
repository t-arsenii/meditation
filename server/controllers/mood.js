const MoodModel = require('../models/Mood');

const addMoodRecord = async (req, res) => {
  const user = await User.findById(req.body.userId);
  
  if (!user) {
    throw new Error('User not found Mood not saved');
  } 
  const { date, mood } = req.body;

  try {
    const newMoodD = new MoodModel({ 
      username: user.username,
      date, 
      mood,
      userId: user._id,
    });
    await newMoodD.save();
    await User.findByIdAndUpdate(req.body.userId, {
      $push: { mood: newMoodD },
  })
    res.status(201).send('Mood record added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  addMoodRecord,
};
