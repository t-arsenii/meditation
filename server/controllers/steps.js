// controllers/steps.js
import fs from 'fs';
import path from 'path';
import { MongoClient, ObjectId } from 'mongodb';  // Import MongoClient and ObjectId from mongodb
import Steps from '../models/Steps.js';
import mongoose from 'mongoose';
import stream from 'stream';

const connectionUri = 'mongodb+srv://test:test123@cluster0.chbpm7k.mongodb.net/';
const dbName = 'test';  // Replace with your actual database name

export const insertSteps = async (req, res) => {
  try {
    const { title } = req.body;

    const filePath = 'D:\\study\\dyplom\\server\\data\\atmospherepiano.mp3';
    const buffer = fs.readFileSync(filePath);

    // Create a connection to MongoDB
    const client = new MongoClient(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    
    // Access the database
    const database = client.db(dbName);

    // Access the GridFS bucket
    const bucket = new mongoose.mongo.GridFSBucket(database);

    // Create a readable stream from the buffer
    const bufferStream = new stream.PassThrough();
    bufferStream.end(buffer);

    // Create a write stream to GridFS
    const uploadStream = bucket.openUploadStream('atmospherepiano.mp3');
    bufferStream.pipe(uploadStream);

    // Wait for the upload to complete
    await new Promise((resolve, reject) => {
      uploadStream.on('finish', resolve);
      uploadStream.on('error', reject);
    });

    // Close the connection
    await client.close();

    const steps = new Steps({
      title,
      audio: {
        file_id: uploadStream.id,
        filename: 'atmospherepiano.mp3',
      },
    });

    await steps.save();

    res.json({ message: 'Steps added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
