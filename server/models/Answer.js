import mongoose from "mongoose";
const AnswerSchema = new mongoose.Schema({
    answerText: { type: String, required: true }
});
export default mongoose.model('Answer', AnswerSchema) 
