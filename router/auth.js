const express = require("express");
const { enterInterview, createUser, login } = require("../controller/auth.controller");
const authRouter = express.Router();

authRouter.route("/createUser").post(createUser)
authRouter.route("/login").post(login)
authRouter.post("/enterInterview", enterInterview);

module.exports = authRouter;
