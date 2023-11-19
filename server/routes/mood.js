import { Router } from 'express'
import { addMoodRecord , getMoodData} from '../controllers/mood.js';
const router = new Router()

router.post('/addMood', addMoodRecord);
router.get('/getMoodData', getMoodData);

export default router
