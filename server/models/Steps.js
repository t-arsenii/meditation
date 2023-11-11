// models/Steps.js
import mongoose from 'mongoose';

const stepsSchema = new mongoose.Schema({
  title: String,
  audio: {
    file_id: mongoose.Schema.Types.ObjectId,
    filename: String,
  },
});

export default mongoose.model('Steps', stepsSchema);
