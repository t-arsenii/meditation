import mongoose from "mongoose";
const RewardSchema = new mongoose.Schema({
    name: String,
    description: String,
    pointsRequired: Number,
  });

  export default mongoose.model('Reward', RewardSchema) 

  // import mongoose from "mongoose";
  // export default mongoose.model('Meditation', UserSchema) 

