// routes/chat.js


import { Router } from 'express'
import { sendMessage, getMessages , getUsers} from '../controllers/chat.js';

const router = Router();

// Routes for chat operations
router.post('/send', sendMessage);
router.get('/messages', getMessages);
router.get('/users', getUsers);

export default router;
