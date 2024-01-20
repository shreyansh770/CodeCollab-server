const express = require("express");
const {
  getInterviews,
  createInterView,
  updateInterview,
  deleteInterview,
} = require("../../controller/interview.controller");

const interViewRouter = express.Router();

interViewRouter.route("/get").post(getInterviews);
interViewRouter.route("/create").post(createInterView);
interViewRouter.route("/update").post(updateInterview);
interViewRouter.route("/delete").post(deleteInterview);

module.exports = interViewRouter;
