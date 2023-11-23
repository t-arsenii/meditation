import Chat from "../models/Chat.js";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
      const users = await User.find({}, 'username');
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve users', error: error.message });
    }
  };

export const sendMessage = async (req, res) => {
    try {
      const { sender, receiver, message } = req.body;
  
      // Create a new message using the Chat model
      const newMessage = new Chat({ sender, receiver, message });
  
      // Save the message to the database
      await newMessage.save();
  
      res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send message', error: error.message });
    }
  };
  
  export const getMessages = async (req, res) => {
    try {
      const { sender, receiver } = req.query;
  
      // Retrieve messages based on sender and receiver from the database
      const messages = await Chat.find({
        $or: [
          { sender: sender, receiver: receiver },
          { sender: receiver, receiver: sender },
        ],
      })
      .populate('sender', 'username') // Populate sender field with username
      .populate('receiver', 'username'); // Populate receiver field with username
  
      res.status(200).json({ messages });
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve messages', error: error.message });
    }
  };