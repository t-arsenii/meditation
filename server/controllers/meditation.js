
import meditation from "../data/meditation.js";

import User from "../models/User.js";

import Meditation from "../models/Meditation.js";
import SavedMeditation from "../models/SavedMeditation..js";
//get questions from db
export const getMeditations= async (req, res) => {
  try {
   
   const m =  await Meditation.find();
      res.json(m)
  
} catch (error) {
  res.json({ error })
}
}

// Dodanie medytacji
export const insertMeditations = async (req, res) => {
  try {
    await Meditation.insertMany( meditation );
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
};

//dodanie zapisanej medytacji do user
export const insertSavedMeditations = async (req, res) => {

    try {
        const user = await User.findById(req.body.userId);
        const meditation = await Meditation.findById(req.body.meditationId);
        //const {title, description} = req.body
        if (!user) {
            throw new Error('User not found Meditation not saved');
          } 
          if (!meditation) {
            throw new Error('Meditation not found Meditation not saved');
          } 
          const newSavedMeditation = new SavedMeditation({
            username: user.username,
            title: meditation.title,
            description: meditation.description,
            meditationId: meditation._id,
            userId: req.userId,
        })
        await newSavedMeditation.save()
          await User.findByIdAndUpdate(req.body.userId, {
            $push: { savedMeditations: newSavedMeditation },
        })
      res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
      res.json({ msg: 'Error w controllers' });
    }
  };

  //Get user SavedMeditation
  export const getMySavedMeditations = async (req, res) => {
    try {
        const user = await User.findById(req.body.userId)
        const list = await Promise.all(
            user.savedMeditations.map((savedMeditation) => {
                return SavedMeditation.findById(savedMeditation._id)
            }),
        )

        res.json(list)
    } catch (error) {
        res.json({ message: 'Coś poszło nie tak.' })
    }
}