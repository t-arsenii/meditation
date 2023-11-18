import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    levels:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Levels'
      }],
    rewards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reward'
      }], // Tablica nagród
    savedMeditations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SavedMeditation'
    }],
    
    result: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Result',
      default: null, // Set the default value to null
    }],
    mood: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mood',
      },
    ],
    
  });

export default mongoose.model('User', UserSchema)  