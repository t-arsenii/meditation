import mongoose from "mongoose";
const LevelsSchema = new mongoose.Schema({
    name: String,
    description: String,
    
  });
export default mongoose.model('Levels', LevelsSchema) 
