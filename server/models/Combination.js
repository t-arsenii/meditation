import mongoose from "mongoose";

const CombinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    question1: { type: String, required: true },
    answer1: { type: String, required: true },
    question2: { type: String, required: true },
    answer2: {type: String, required: true },
    question3: { type: String, required: true },
    answer3: { type: String, required: true},
});

export default mongoose.model('Combination', CombinationSchema);