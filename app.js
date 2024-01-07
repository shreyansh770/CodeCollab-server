const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const authRouter = require('./router/auth');
const path = require('path');
require('dotenv').config()

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors())

app.use(express.json())

app.use("/auth",authRouter)

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('codeChange', (newCode) => {
    let roomID = newCode.roomID;
    io.to(roomID).emit('codeChange', newCode.newValue);
  });
  

  socket.on('joininterview',(room)=>{
    socket.join(room)
    console.log(`Room joined ${room}`)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
