const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const authRouter = require("./router/auth");
const path = require("path");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const peerRouter = require("./router/peer");
const problemRouter = require("./router/problems/problem");
const interViewRouter = require("./router/interview/interview");


const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});



app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/peer", peerRouter);
app.use("/problem",problemRouter);
app.use("/interview",interViewRouter)


io.on("connection", (socket) => {

  socket.on("codeChange", (newCode) => {
    let roomID = newCode.roomID;
    io.to(roomID).emit("codeChange", newCode);
  });

  socket.on("joininterview", (room) => {
    socket.join(room);
    console.log(`Room joined ${room}`);
  });

  socket.on("user-joined", (data) => {
    console.log("user-joined event received. User ID:", data.userID);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
