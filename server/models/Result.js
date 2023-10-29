import mongoose from "mongoose";
const ResultSchema = new mongoose.Schema({
    username: {type : String},
    result: { type : Array, default: []}, // create question with [] default value
    
});
export default mongoose.model('Result', ResultSchema ) 
