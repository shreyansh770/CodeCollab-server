const express = require("express");
const { enterInterview, createUser, login, register, logout } = require("../controller/auth.controller");
const upload = require("../config/multer");
const authRouter = express.Router();

authRouter.route("/createUser").post(createUser)
authRouter.route("/register").post(upload.single('file'),register,createUser)
authRouter.route("/login").post(login)
authRouter.route("/logout").post(logout)
authRouter.post("/enterInterview", enterInterview);

module.exports = authRouter;
