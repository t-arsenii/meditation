import { Router } from 'express'
import { insertQuestions } from '../controllers/test.js'
import { checkAuth } from '../utils/checkAuth.js'
const router = new Router()

//Get all questions
router.get('/questions')

// insert questions
// http://localhost:3002/api/test
router.post('/questions',insertQuestions)

//router.get('/', show)

 export default router