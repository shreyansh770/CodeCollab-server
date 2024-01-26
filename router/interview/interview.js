const express = require("express");
const {
  getInterviews,
  createInterView,
  updateInterview,
  deleteInterview,
  getWindowSpecificInterviews,
  updateStatus,
} = require("../../controller/interview.controller");
const upload = require("../../config/multer");

const interViewRouter = express.Router();

interViewRouter.route("/getwindow/:range").get(getWindowSpecificInterviews);
interViewRouter.route("/get").post(getInterviews);
interViewRouter.route("/create").post(upload.single('file'),createInterView);
interViewRouter.route("/update").post(updateInterview);
interViewRouter.route("/updatestatus").post(updateStatus);
interViewRouter.route("/delete").post(deleteInterview);

module.exports = interViewRouter;
