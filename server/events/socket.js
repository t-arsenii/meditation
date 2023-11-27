import User from "../models/User.js"
import Message from "../models/Message.js"
export const connectedUsers = {};
import { io } from "../index.js"
export function handleSocketEvents()
{
    io.on('connection', (socket) =>
    {
        socket.auth = false;
        socket.on("authenticate", async (_id) =>
        {
            // const { _id } = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(_id).exec();
            if (!user)
            {
                socket.emit("error", { message: "No user found" });
                return;
            }
            socket.auth = true;
            socket.user = user;
            connectedUsers[_id] = socket.id;
        });
        socket.on('join-chat', (chatId) =>
        {
            socket.join(chatId);
        });

        socket.on('send-message', async ({ chatId, message }) =>
        {
            if (!socket.auth)
            {
                console.error("User not authenticated");
            }
            const userId = socket.user._id;
            const newMessage = new Message({ chatId, userId, message });
            await newMessage.save();

            socket.to(chatId).emit('new-message', { newMessage, userId });
        });
        socket.on('disconnect', () =>
        {
            console.log('User disconnected');
            for (const [userId, socketId] of Object.entries(connectedUsers))
            {
                if (socketId === socket.id)
                {
                    delete connectedUsers[userId];
                    break;
                }
            }
        });
    })
}