import mongoose from 'mongoose'
const meditationSchema = new mongoose.Schema({
    title: String,
    description: String,
    

  });

  export default mongoose.model('Meditation', meditationSchema) 