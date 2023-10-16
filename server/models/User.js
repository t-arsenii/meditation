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
    ResultProgram: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ResultProgram'
    }],
  });

export default mongoose.model('User', UserSchema)  