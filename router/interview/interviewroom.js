const express = require("express");
const { selectProblems, getInvProblems, getResume } = require("../../controller/interviewroom.controller");

const invRoomRouter = express.Router()


invRoomRouter.route("/selectproblems").post(selectProblems)
invRoomRouter.route("/getproblems").post(getInvProblems)
invRoomRouter.route("/getresume").post(getResume)


module.exports = invRoomRouter;