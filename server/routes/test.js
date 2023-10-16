import { Router } from 'express'
import { addQueAnswKomb } from '../controllers/test.js'
import { checkAuth } from '../utils/checkAuth.js'
const router = new Router()
// Dodanie pytan odpowiedzi i kombinacji
// http://localhost:3002/api/test
router.post('/',addQueAnswKomb)

//router.get('/', show)

 export default router