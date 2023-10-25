import Question from "../models/Question.js"

import Combination from "../models/Combination.js";
import User from "../models/User.js";
import questions, {answers} from "../data/questions.js";
import UserAnswer from "../models/UserAnswer.js";

//get questions from db
export const getQuestions = async (req, res) => {
  try {
   
   const q =  await Question.find();
      res.json(q)
  
} catch (error) {
  res.json({ error })
}
}

//Dodanie pytan odpowiezi i kombinacji
export const insertQuestions = async (req, res) => {
        try {
         
          await Question.insertMany({ questions, answers}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})

          } )
            
          } 
        
     catch (error) {
        res.json({ error })
    }
}

//Store User answer

export const storeResult = async (req, res) => {
  try {
   const {} = req.body
   UserAnswer.create({}, function(err, data){
    res.json({ msg: "User Answer Stored...!"})

  } )
      
    } 
  
catch (error) {
  res.json({ error })
}
}


