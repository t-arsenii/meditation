import mongoose from 'mongoose'

const moodSchema = new mongoose.Schema({
  username: String,
  date: Date,
  mood: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Mood', moodSchema) 