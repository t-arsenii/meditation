import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    possibleAnswers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
});
export default mongoose.model('Question', QuestionSchema ) 
