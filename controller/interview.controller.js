const { v4: uuidv4 } = require("uuid");
const mongoose = require('mongoose');
const interviewModel = require("../model/interviewModel");
const cloudinary = require("../config/cloudinary");
const convertBase64 = require("../utils/base64");
const sendMail = require("../utils/sendMail");

async function getInterviews(req, res) {
  try {
    let { company } = req.isVerified;
    let interviews = await interviewModel.find({ company: company });

    if (interviews.length > 0) {
      res.status(200).json(interviews);
    } else {
      res.status(404).json("No interview exists");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

async function createInterView(req, res) {
  try {
    let { inv_email, can_email, role, date, time } = JSON.parse(
      req.body.data
    );
    let company_id = req.isVerified.company
    const roomID = uuidv4().slice(-4);

    let file = req.file ? req.file : null;

    let dataURI = convertBase64(file)

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "interview-files",
      allowed_formats: ["pdf"],
      public_id: uuidv4(),
    });

    const interView = new interviewModel({
      inv_email,
      can_email,
      role,
      date,
      time,
      roomID,
      company:company_id,
      resume_url: result.secure_url,
    });

    interView.save();

    sendMail(3,roomID,inv_email)
    sendMail(3,roomID,can_email)

    res.status(200).json({message : "Interview successfully scheduled",url :result.secure_url});
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getWindowSpecificInterviews(req, res) {
  try {
    let { range } = req.params;
    let company = new mongoose.Types.ObjectId(req.isVerified.company)
    
    const currentDate = new Date();
    let startDate;
    switch (range) {
      case "weekly":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 7
        );
        break;
      case "monthly":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          currentDate.getDate()
        );
        break;
      case "yearly":
        startDate = new Date(
          currentDate.getFullYear() - 5,
          currentDate.getMonth(),
          currentDate.getDate()
        );
        break;
      default:
        return res.status(400).json({ message: "Invalid range parameter" });
    }

    const pipeline = [
      {
        $match: {
          date: { $gte: startDate, $lt: currentDate },
          company : company
        },
      },
      {
        $group: {
          _id: "$status", // Group by status field
          count: { $sum: 1 }, // Count documents in each group
        },
      },
    ];

    const interviewsStats = await interviewModel.aggregate(pipeline);

    const result = {
      pending: 0,
      declined: 0,
      selected: 0,
      total: 0,
    };

    interviewsStats.forEach((stat) => {
      if (stat._id === "pending") result.pending = stat.count;
      else if (stat._id === "declined") result.declined = stat.count;
      else if (stat._id == "selected") result.selected = stat.count;
    });

    result.total = result.pending + result.declined + result.selected;

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// will get id to update the interview
async function updateInterview(req, res) {
  try {
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

async function updateStatus(req, res) {
  try {
    let { _id, status } = req.body;

    await interviewModel.findByIdAndUpdate(
      _id,
      { $set: { status: status } },
      { new: true }
    );

    res.status(200).send("Status updated");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

// will get id to delete the interview
async function deleteInterview(req, res) {
  try {
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

module.exports = {
  getInterviews,
  createInterView,
  updateInterview,
  deleteInterview,
  getWindowSpecificInterviews,
  updateStatus,
};
