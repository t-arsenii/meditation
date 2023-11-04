import { Router } from 'express'
import { checkAuth } from '../utils/checkAuth.js'
import { getMeditations, getMySavedMeditations, insertMeditations, insertSavedMeditations } from '../controllers/meditation.js'
const router = new Router()

//Get all meditations
router.get('/meditations',getMeditations)

// insert meditations
// http://localhost:3002/api/test
router.post('/meditations',insertMeditations)

//dodanie zapisanej medytacji do user
router.post('/meditationsSaved',insertSavedMeditations)

//Get user SavedMeditation
router.get('/meditationsSaved',getMySavedMeditations)

 export default router