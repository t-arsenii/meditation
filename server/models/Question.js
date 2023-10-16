import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema({
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
});
export default mongoose.model('Question', QuestionSchema ) 
