import mongoose from 'mongoose'
const meditationSchema = new mongoose.Schema({
    title: String,
    description: String,
    durationMinutes: Number,

  });

  export default mongoose.model('Meditation', meditationSchema) 