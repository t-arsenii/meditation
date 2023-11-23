// routes/chat.js

import express from 'express';
import { sendMessage, getMessages , getUsers} from '../controllers/chat.js';

const router = express.Router();

// Routes for chat operations
router.post('/send', sendMessage);
router.get('/messages', getMessages);
router.get('/users', getUsers);

export default router;
