import mongoose from 'mongoose'
const meditationSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
    audio: {
      file_id:  { type: mongoose.Schema.Types.ObjectId, default: null },
      filename: { type: String, default: 'default_filename.mp3' },
    },

  });

  export default mongoose.model('Meditation', meditationSchema) 