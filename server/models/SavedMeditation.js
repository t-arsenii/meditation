import mongoose from 'mongoose'
const savedMeditationSchema = new mongoose.Schema({
  username: String,  
  title: String,
  description: String,
  meditationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meditation' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  img: String,
});

  export default mongoose.model('SavedMeditation', savedMeditationSchema) 