const { v4: uuidv4 } = require("uuid");
const interviewModel = require("../model/interviewModel");
const cloudinary = require("../config/cloudinary");
const convertBase64 = require("../utils/base64");

async function getInterviews(req, res) {
  try {
    let { company } = req.body;
    let interviews = await interviewModel.find({ company: company });

    if (interviews.length > 0) {
      res.status(200).json(interviews);
    } else {
      res.status(200).json("No interview exists");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

async function createInterView(req, res) {
  try {
    let { inv_email, can_email, role, date, time, company } = JSON.parse(
      req.body.data
    );

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
      company,
      resume_url: result.secure_url,
    });

    interView.save();

    res.status(200).json({message : "Interview successfully scheduled",url :result.secure_url});
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getWindowSpecificInterviews(req, res) {
  try {
    const { range } = req.params;
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
          currentDate.getMonth() - 12,
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
    res.status(500).send("Internal server error");
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
