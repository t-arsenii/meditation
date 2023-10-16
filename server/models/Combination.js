import mongoose from "mongoose";

const CombinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    question1: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    answer1: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
    question2: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    answer2: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
    question3: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    answer3: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
});

export default mongoose.model('Combination', CombinationSchema);