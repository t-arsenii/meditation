import mongoose from "mongoose";
const ResultSchema = new mongoose.Schema({
    username: {type : String},
    result: { type : Array, default: []},
    //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
});
export default mongoose.model('Result', ResultSchema ) 
