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
const { authenticate, roleAuthorization } = require("../../middlewares/authMiddleware");

const interViewRouter = express.Router();



interViewRouter.route("/getwindow/:range/:company").get(getWindowSpecificInterviews);
interViewRouter.route("/get").post(authenticate,roleAuthorization,getInterviews);
interViewRouter.route("/create").post(authenticate,roleAuthorization,upload.single('file'),createInterView);
interViewRouter.route("/update").post(updateInterview);
interViewRouter.route("/updatestatus").post(updateStatus);
interViewRouter.route("/delete").post(deleteInterview);

module.exports = interViewRouter;
