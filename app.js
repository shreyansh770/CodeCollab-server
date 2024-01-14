const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const authRouter = require("./router/auth");
const path = require("path");
require("dotenv").config();
const { ExpressPeerServer } = require("peer");
const peerRouter = require("./router/peer");
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use("/peerjs", peerServer);

app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);
app.use("/peer", peerRouter);

let mapForP1_P2_peerID = []; // 0 -> individual 1 ; 1-> individual 2
let mapForP1_P2_socketID = []; // 0 -> individual 1 ; 1-> individual 2

io.on("connection", (socket) => {
  if (mapForP1_P2_socketID.length == 0) {
    mapForP1_P2_socketID[0] = socket.id;
  } else if (mapForP1_P2_socketID.length == 1) {
    mapForP1_P2_socketID[1] = socket.id;
  }
  socket.on("codeChange", (newCode) => {
    let roomID = newCode.roomID;
    io.to(roomID).emit("codeChange", newCode.newValue);
  });

  socket.on("joininterview", (room) => {
    socket.join(room);
    console.log(`Room joined ${room}`);
  });

  socket.on("user-joined", (data) => {
    console.log("user-joined event received. User ID:", data.userID);

    if (mapForP1_P2_peerID.length == 0) {
      socket.emit("video-status", { userId: data.userID, videoEnabled: true });
      mapForP1_P2_peerID[0] = data.userID;
    } else if (mapForP1_P2_peerID.length == 1) {
      socket.emit("video-status", { userId: data.userID, videoEnabled: true });
      socket.emit("video-status", {
        userId: mapForP1_P2_peerID[0],
        videoEnabled: true,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
