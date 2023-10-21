import Question from "../models/Question.js"

import Combination from "../models/Combination.js";
import User from "../models/User.js";
import questions from "../data/questions.js";

//Dodanie pytan odpowiezi i kombinacji

export const insertQuestions = async (req, res) => {
        try {
         
          await Question.insertMany({ questions })
            res.json({ msg: "Data Saved Successfully...!"})
        
    } catch (error) {
        res.json({ error })
    }
}




