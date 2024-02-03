const mongoose = require('mongoose');

const connectToMongoDB = require("../utils/mongo");

connectToMongoDB();

const interviewSchema = new mongoose.Schema({
  inv_email: {
    type: String,
    required: true,
    trim: true,
  },
  can_email: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time :{
    type: String,
    required: true,
  },
  roomID: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
    trim: true,
  },
  status :{
    type : String,
    default : 'pending'
  },
  resume_url :{
    type:String
  }
});

const interviewModel = mongoose.model('interviewModel', interviewSchema);

module.exports = interviewModel;
