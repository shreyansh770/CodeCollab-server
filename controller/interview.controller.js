const { v4: uuidv4 } = require("uuid");
const interviewModel = require("../model/interviewModel");

async function getInterviews(req, res) {
    try {
      let { company } = req.body;
  
      let interviews = await interviewModel.find({ company: company });
  
      if (interviews.length >0) {
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
      let { inv_email, can_email, role,date ,time, company } = req.body;
  
      const roomID = uuidv4().slice(-4);
  
      const interView = new interviewModel({
        inv_email,
        can_email,
        role,
        date,
        time,
        roomID,
        company,
      });
  
      interView.save();
  
      res.status(200).send("Interview successfully scheduled");
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  }
  
  // will get id to update the interview
  async function updateInterview(req,res){
      try {
          
      } catch (error) {
          res.status(500).send("Internal server error");
      }
  }
  
  // will get id to delete the interview
  async function deleteInterview (req,res){
      try {
          
      } catch (error) {
          res.status(500).send("Internal server error");
      }
  }

  module.exports = {
    getInterviews,
    createInterView,
    updateInterview,
    deleteInterview
  }