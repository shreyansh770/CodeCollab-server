const express = require("express");
const { enterInterview, createUser, login, register, logout, getLoginInUser, getOTP, verifyOTP } = require("../controller/auth.controller");
const { authenticate, roleAuthorization } = require("../middlewares/authMiddleware");
const upload = require("../config/multer");
const authRouter = express.Router();

authRouter.route("/createUser").post(createUser)
authRouter.route("/register").post(upload.single('file'),register,createUser)
authRouter.route("/login").post(login)
authRouter.route("/loggeduser").get(authenticate,getLoginInUser)
authRouter.route("/logout").post(logout)
authRouter.post("/enterInterview", enterInterview);
authRouter.post("/getotp", getOTP);
authRouter.post("/verifyotp", verifyOTP);

module.exports = authRouter;
