
import meditation from "../data/meditation.js";

import User from "../models/User.js";

import Meditation from "../models/Meditation.js";
import SavedMeditation from "../models/SavedMeditation.js";
import mongoose from 'mongoose';
import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';
import stream from 'stream';
import path from 'path';
const connectionUri = 'mongodb+srv://test:test123@cluster0.chbpm7k.mongodb.net/';
const dbName = 'test';  // Replace with your actual database name

import { gfs } from '../multer/multer.js';

//get meditations from db
export const getMeditations= async (req, res) => {
  try {
   
   const m =  await Meditation.find();
      res.json(m)
  
} catch (error) {
  res.json({ error })
}
}

//get One meditations from db
export const getOneMeditation= async (req, res) => {
  try {
    const meditation = await Meditation.findById(req.params.meditationId)
   
   
      res.json(meditation)
  
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
//Dodanie auio do medytacji
export const insertAudioToMeditations = async (req, res) => {
  try {
   
   const meditations = ["65525551782459e2a11e271a","65525551782459e2a11e271b",
                        "65525551782459e2a11e271c","65525551782459e2a11e271d",
                        "65525551782459e2a11e271e","65525551782459e2a11e271f",
                        "65525551782459e2a11e2720","65525551782459e2a11e2721"
                       ];
   const filePaths = ["D:\\study\\dyplom\\server\\data\\M1.MP3","D:\\study\\dyplom\\server\\data\\M2.MP3",
                       "D:\\study\\dyplom\\server\\data\\M3.MP3","D:\\study\\dyplom\\server\\data\\M4.MP3",
                       "D:\\study\\dyplom\\server\\data\\M5.MP3","D:\\study\\dyplom\\server\\data\\M5.MP3",
                       "D:\\study\\dyplom\\server\\data\\M5.MP3","D:\\study\\dyplom\\server\\data\\M5.MP3"
                      ];
                     
const client = new MongoClient(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect();

const database = client.db(dbName);

    // Access the GridFS bucket
    const bucket = new mongoose.mongo.GridFSBucket(database);

    for (let i = 0; i < filePaths.length; i++) {
      const filePath = filePaths[i];
      const meditationId = meditations[i];
      console.log(meditationId)
      console.log(filePath)
      
      // Read file content
      const buffer = fs.readFileSync(filePath);

      // Create a readable stream from the buffer
      const bufferStream = new stream.PassThrough().end(buffer);

      // Extract filename from the path
      const filename = path.basename(filePath);

      // Create a write stream to GridFS
      const uploadStream = bucket.openUploadStream(filename);
      bufferStream.pipe(uploadStream);

      // Wait for the upload to complete
      await new Promise((resolve, reject) => {
        uploadStream.on('finish', resolve);
        uploadStream.on('error', reject);
      });
      
      // Update the meditation with the new audio information
      await Meditation.updateOne(
        { _id: meditationId },
        { $set: { audio: { file_id: uploadStream.id, filename } } }
      );
    }


    res.json({ msg: "Audio Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }finally {
    // Close the MongoDB client connection
    await client.close();
  }
};
//dodanie zapisanej medytacji do user
export const insertSavedMeditations = async (req, res) => {
  try {
      const user = await User.findById(req.body.userId);
      const meditation = await Meditation.findById(req.body.meditationId);

      if (!user) {
          throw new Error('User not found. Meditation not saved.');
      } 
      if (!meditation) {
          throw new Error('Meditation not found. Meditation not saved.');
      }

      console.log('Checking existing saved meditation...');
      const existingSavedMeditation = await SavedMeditation.findOne({
         userId: user._id,
          meditationId: meditation._id,
      });

      if (existingSavedMeditation) {
          console.log('Meditation is already saved for the user.');
          throw new Error('Meditation is already saved for the user.');
      }

      console.log('Saving new meditation...');
      const newSavedMeditation = new SavedMeditation({
          username: user.username,
          title: meditation.title,
          description: meditation.description,
          meditationId: meditation._id,
          userId: user._id,
      });

      await newSavedMeditation.save();

      console.log('Updating user document...');
      await User.findByIdAndUpdate(req.body.userId, {
          $push: { savedMeditations: newSavedMeditation },
      });

      res.json({ msg: 'Data Saved Successfully...!' });
      console.log(newSavedMeditation);
  } catch (error) {
      console.error('Error in controllers:', error.message);
      res.json({ msg: 'Error in controllers', error: error.message });
  }
};


  //Get user SavedMeditation
  export const getMySavedMeditations = async (req, res) => {
    try {
      const user = await User.findById(req.query.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      //console.log(`Data getmood`)
      const list = await Promise.all(
        user.savedMeditations.map((savedMeditation) => {
          return SavedMeditation.findById(savedMeditation._id);
        })

      );
  
      res.json(list);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
  //Delete SavedMeditation
  export const removeSavedMeditation = async (req, res) => {
    try {
        const savedMeditation = await SavedMeditation.findByIdAndDelete(req.params.savedMeditationId)
        console.log(`SavedMeditationId   ${req.params.savedMeditationId}`)
        console.log(`UserId   ${req.query.id}`)
        console.log(`REQ body ${req.query}`)
        if (!savedMeditation) return res.json({ message: 'Takiej medytacji nie istnieje' })
        //const user = await User.findById(req.query.userId);
        await User.findByIdAndUpdate(req.query.id, {
            $pull: { savedMeditations: req.params.savedMeditationId },
        })
        
        res.json({ message: 'Zapisana medytacja została usunięta.' })
    } catch (error) {
        res.json({ message: 'Coś poszło nie tak.' })
    }
}

export const streamAudio = async (req, res) => {
  try {
    const fileId = req.params.fileId;
    console.log('File ID:', fileId);

    if (!gfs) {
      console.log('GridFSBucket is not initialized');
      return res.status(500).json({ error: 'GridFSBucket is not initialized' });
    }

    const audioStream = gfs.createReadStream({ _id: mongoose.Types.ObjectId(fileId) });
    console.log('Audio Stream:', audioStream);

    audioStream.pipe(res);
  } catch (error) {
    console.log('Error streaming audio:', error);
    res.status(500).json({ error: 'Error streaming audio' });
  }
};

