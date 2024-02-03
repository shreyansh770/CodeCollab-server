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



interViewRouter.route("/getwindow/:range").get(authenticate,roleAuthorization,getWindowSpecificInterviews);
interViewRouter.route("/get").post(authenticate,roleAuthorization,getInterviews);
interViewRouter.route("/create").post(authenticate,roleAuthorization,upload.single('file'),createInterView);
interViewRouter.route("/update").post(authenticate,roleAuthorization,updateInterview);
interViewRouter.route("/updatestatus").post(authenticate,roleAuthorization,updateStatus);
interViewRouter.route("/delete").post(authenticate,roleAuthorization,deleteInterview);

module.exports = interViewRouter;
