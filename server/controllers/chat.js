//controllers chat.js
import Chat from "../models/Chat.js";
import User from "../models/User.js";
import { io } from "../index.js"
import { connectedUsers } from "../events/socket.js";
export const startChat = async (req, res) =>
{
  const { userA, userB } = req.body;

  try
  {
    let chatId = await findExistingChat(userA, userB);

    if (!chatId)
    {
      chatId = await createNewChat(userA, userB);

      if (chatId)
      {
        io.to(connectedUsers[userA]).emit('new-chat', chatId);
        io.to(connectedUsers[userB]).emit('new-chat', chatId);
      }
    }

    res.status(200).json({ chatId });
  } catch (error)
  {
    res.status(500).json({ error: 'Failed to start chat' });
  }
};
export const fetchUserChats = async (req, res) =>
{
  const { userId } = req.params;
  console.log(userId)
  try
  {
    const userChats = await Chat.find({ users: userId });
    const chatIds = userChats.map((chat) => chat._id);
    res.status(200).json({ chatIds });
  } catch (error)
  {
    res.status(500).json({ error: 'Failed to fetch user chats' });
  }
};
const findExistingChat = async (userA, userB) =>
{
  const chat = await Chat.findOne({ users: { $all: [userA, userB] } });
  return chat ? chat._id : null;
};

const createNewChat = async (userA, userB) =>
{
  const chat = new Chat({ users: [userA, userB] });
  await chat.save();
  return chat._id;
};