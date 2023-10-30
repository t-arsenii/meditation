import { Router } from 'express'
import { insertQuestions ,getQuestions} from '../controllers/test.js'
import { checkAuth } from '../utils/checkAuth.js'
const router = new Router()

//Get all questions
router.get('/questions',getQuestions,checkAuth)

// insert questions
// http://localhost:3002/api/test
router.post('/questions',insertQuestions)


 export default router