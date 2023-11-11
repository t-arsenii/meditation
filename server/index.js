import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './routes/auth.js'
import testRoute from './routes/test.js'
import meditationRoute from './routes/meditation.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express()


// Middleware
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/auth', authRoute)
app.use('/api/test', testRoute)
app.use('/api', meditationRoute)
 async function start(){
    try {
        await mongoose.connect('mongodb+srv://test:test123@cluster0.chbpm7k.mongodb.net/')
        app.listen(3002, () => console.log(`Server działa na porcie: 3002`))

    } catch (error) {
        console.log(error)
    }
 }
start();
