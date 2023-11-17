import { Router } from 'express'
import {insertPrograms, getPrograms, getMyResult } from '../controllers/program.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

//Get all Programs
router.get('/get', getPrograms)

// insert programs

router.post('/add',insertPrograms)

//Get UserProgram
router.get('/getMy', getMyResult)

 export default router