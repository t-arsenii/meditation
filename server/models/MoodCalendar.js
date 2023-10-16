  import mongoose from "mongoose";
  const moodCalendarSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    date: Date,
    mood: String,
  });
  export default mongoose.model('MoodCalendar', moodCalendarSchema) 
