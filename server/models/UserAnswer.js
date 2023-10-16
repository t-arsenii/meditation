import mongoose from "mongoose";
const UserAnswerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // referencja do użytkownika
    question1: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }, // referencja do pytania
    answer1: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }, // referencja do odpowiedzi
    question2: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    answer2: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
    question3: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    answer3: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
  });
export default mongoose.model('UserAnswer', UserAnswerSchema) 
