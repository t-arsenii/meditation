import { Router } from 'express'
import { checkAuth } from '../utils/checkAuth.js'
import { insertSteps } from '../controllers/steps.js'

import {upload} from '../multer/multer.js'
const router = new Router()

//Get  steps
//router.get('/steps',getMeditations)

// insert steps
// http://localhost:3002/api/test
router.post('/steps', upload.single('audio'), insertSteps);


 export default router