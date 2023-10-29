import Question from "../models/Question.js"

import Combination from "../models/Combination.js";
import User from "../models/User.js";
import questions, {answers} from "../data/questions.js";
import UserAnswer from "../models/UserAnswer.js";
import Result from "../models/Result.js";
//get questions from db
export const getQuestions = async (req, res) => {
  try {
   
   const q =  await Question.find();
      res.json(q)
  
} catch (error) {
  res.json({ error })
}
}

// Dodanie pytań, odpowiedzi i kombinacji
export const insertQuestions = async (req, res) => {
  try {
    await Question.insertMany({ questions, answers });
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
};


//Store User answer post all result

export const storeResult = async (req, res) => {
  try {
    const { username, result } = req.body;
    await Result.create({ username, result });
    res.json({ msg: 'User Answer Stored...!' });
  } catch (error) {
    res.json({ error });
  }
};


//Get Results


export const getResult = async (req, res) => {
  try {
   const r = await Result.find()
    res.json(r)
  } catch (error) {
  res.json({ error })
}
}
