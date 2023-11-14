import { Router } from 'express'
import { addMoodRecord } from '../controllers/mood.js';
const router = new Router()

router.post('/addMood', addMoodRecord);

export default router
