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
const planRouter = require("./router/plan/plan");
const paymentRouter = require("./router/payment/payment");
const connectToMongoDB = require("./utils/mongo");
const invRoomRouter = require("./router/interview/interviewroom");


const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});



app.use(cors({ origin: "https://interviewsync.in/" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/peer", peerRouter);
app.use("/api/v1/problem",problemRouter);
app.use("/api/v1/interview",interViewRouter)
app.use("/api/v1/interviewroom",invRoomRouter)
app.use("/api/v1/plan",planRouter)
app.use("/api/v1/payment",paymentRouter)



io.on("connection", (socket) => {

  socket.on("codeChange", (newCode) => {
    let roomID = newCode.roomID;
    io.to(roomID).emit("codeChange", newCode);
  });

  socket.on("joininterview", (room) => {
    socket.join(room);
    console.log(`Room joined ${room}`);
  });
  socket.on("interview-started", (room) => {
    let roomID = room;
    io.to(roomID).emit("interview-started");
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
  connectToMongoDB()
});
