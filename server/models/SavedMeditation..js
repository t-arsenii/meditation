import mongoose from 'mongoose'
const savedMeditationSchema = new mongoose.Schema({
    
    meditationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Meditation'
    },
    dateSaved: Date,
  });

  export default mongoose.model('SavedMeditation', savedMeditationSchema) 