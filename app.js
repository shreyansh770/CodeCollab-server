// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const authRouter = require('./router/auth');
const path = require('path');

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

// giving the io instance to every route
// app.use((req,res,next)=>{
//   req.io = io;
//   next();
// })

// app.get("/",(req,res)=>{
//   const options = {
//     root: path.join(__dirname)
// };

// const fileName = 'index.html';
// res.sendFile(fileName, options)
// })
// app.use("/auth",authRouter)



io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('codeChange', (newCode) => {
    io.emit('codeChange', newCode);
  });

  // socket.on('joininterview',(room)=>{
  //   socket.join(room)
  //   console.log(`Room joined`)
  // })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
