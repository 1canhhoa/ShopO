const socketIO = require("socket.io");
const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const mongodb = require('./src/configs/mongodb')
const Cart = require('./src/models/cartModel')
mongodb()
require("dotenv").config({
  path: "./.env",
});
app.get('/test',async(req,res,next)=>{
  const rs = await Cart.find({})
 console.log('rs',rs);
})
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world from socket server!");
});

let users = [];

const addUser = (userId,socketId) => {
  console.log('userId',userId);
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
    console.log('users',users);
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};
const getUser = (receiverId) => {
  return users.find((user) => user.userId === receiverId);
};

// Define a message object with a seen property
const createMessage = ({ senderId, receiverId, text, images }) => ({
  senderId,
  receiverId,
  text,
  images,
  seen: false,
});

io.on('connection',(socket)=>{
  console.log('a user is connected');
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });
  // send and get message
  const messages = {}; // Object to track messages sent to each user
  socket.on("sendMessage", ({ senderId, receiverId, text, images }) => {
    const message = createMessage({ senderId, receiverId, text, images });
    const user = getUser(receiverId);
    // Store the messages in the `messages` object
    if (!messages[receiverId]) {
      messages[receiverId] = [message];
    } else {
      messages[receiverId].push(message);
    }
    // send the message to the recevier
    console.log('user',user);
    io.to(user?.socketId).emit("getMessage", message);
  });
  socket.on("messageSeen", ({ senderId, receiverId, messageId }) => {
    const user = getUser(senderId);

    // update the seen flag for the message
    if (messages[senderId]) {
      const message = messages[senderId].find(
        (message) =>
          message.receiverId === receiverId && message.id === messageId
      );
      if (message) {
        message.seen = true;

        // send a message seen event to the sender
        io.to(user?.socketId).emit("messageSeen", {
          senderId,
          receiverId,
          messageId,
        });
      }
    }
    
  });
    // update and get last message
  socket.on("updateLastMessage", ({ lastMessage, lastMessageId,role }) => {
    // const user = getUser(lastMessageId);
    console.log('lastMessage',lastMessage);
    console.log('lastMessageId',lastMessageId);
    io.emit("getLastMessage", {
      lastMessage,
      lastMessageId,
      role
    });
  });
    //when disconnect
  socket.on("disconnect", () => {
    console.log(`a user disconnected!`);
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
})

server.listen(process.env.PORT || 4000, () => {
  console.log(`server is running on port ${process.env.PORT || 4000}`);
  
});