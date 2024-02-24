const interviewModel = require("../model/interviewModel");

async function getResume(req,res){
   try {
      let { _id } = req.body;
  
      let invObj = await interviewModel.findOne({_id});
  
      res.status(200).json({
         message : "Candidate resume",
         resume : invObj.resume_url
      });
    } catch (error) {
      res.status(500).send("Error in getting resume");
    }
}

async function selectProblems(req, res) {
  try {
    let { problemId, _id } = req.body;

     await interviewModel.findOneAndUpdate(
      { _id: _id },
      { $push: { problems: problemId } },
      { new: true }
    );

    res.status(200).json({ message: "Problems saved"});
  } catch (error) {
    res.status(500).send("Error in selecting problems");
  }
}

async function getInvProblems(req, res) {
  try {
    let { _id } = req.body;

    let interviewObj = await interviewModel.findOne({ _id }).populate("problems");

    res.status(200).json({ interviewObj });
  } catch (error) {
    res.status(500).send("Error in getting problems");
  }
}



module.exports = {
  selectProblems,
  getInvProblems,
  getResume
};
