import mongoose from 'mongoose'
const programSchema = new mongoose.Schema({
    name: String,
  result: [Number],
  days: [
    {
      dayId: Number,
      dayName: String,
    },
  ],
});

  export default mongoose.model('Program', programSchema) 