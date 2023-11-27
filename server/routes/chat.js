// routes/chat.js


import { Router } from 'express'
import { startChat, fetchUserChats } from '../controllers/chat.js';

const router = Router();

// Routes for chat operations
router.post('/start-chat', startChat);
router.get("/:userId", fetchUserChats)

export default router;
