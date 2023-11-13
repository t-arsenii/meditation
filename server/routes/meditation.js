import { Router } from 'express'
import { checkAuth } from '../utils/checkAuth.js'
import { getMeditations, getMySavedMeditations, insertMeditations, insertSavedMeditations, removeSavedMeditation , insertAudioToMeditations} from '../controllers/meditation.js'
import {upload} from '../multer/multer.js'

const router = new Router()

//Get all meditations
router.get('/meditations',getMeditations)

// insert meditations
// http://localhost:3002/api/test
router.post('/meditations',insertMeditations)

//dodanie zapisanej medytacji do user
router.post('/meditationsSaved',insertSavedMeditations)

//Dodanie auio do medytacji
router.post('/audioMeditationsSaved', upload.single('audio'),insertAudioToMeditations)

//Get user SavedMeditation
router.get('/meditationsSaved',getMySavedMeditations)

//Delete SavedMeditation
router.delete('/:savedMeditationId',removeSavedMeditation)
 export default router