const express = require("express");
const { enterInterview } = require("../controller/auth.controller");
const authRouter = express.Router();

authRouter.post("/enterInterview", enterInterview);

module.exports = authRouter;
