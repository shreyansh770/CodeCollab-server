const express = require("express");
const roomModel = require("../model/roomModel");
const peerRouter = express.Router();

peerRouter.post("/interviewer",saveInterviewerPeerId);
peerRouter.post("/candidate",saveCandidatePeerId);
peerRouter.post("/getcandidatepeerid",getCandidatePeerID);

async function saveInterviewerPeerId(req, res) {
  try {
    let { roomID, peerID } = req.body;

    let roomExist = await roomModel.find({ roomID: roomID });


    if (roomExist.length==1) {
      let updates = { $set: { inv_peerID: peerID } };
      let filter = { roomID: roomID };
      const idUpdate = await roomModel.updateOne(filter, updates);

      res.status(200).json({
        message: "Interviewer peerid updated",
      });
    } else {
      const newRoom = new roomModel({
        roomID: roomID,
        inv_peerID: peerID,
      });

      let idSave = newRoom.save();
      res.status(200).json({
        message: "Interviewer peerid saved",
      });
    }
  } catch (error) {
    res.status(500).message("Internal server error");
  }
}

async function saveCandidatePeerId(req, res) {
  try {
    let { roomID, peerID } = req.body;
    let roomExist = await roomModel.find({ roomID: roomID });

    if (roomExist.length==1) {
      let updates = { $set: { can_peerID: peerID } };
      let filter = { roomID: roomID };

      const idUpdate = await roomModel.updateOne(filter, updates);

      res.status(200).json({
        message: "Candidate peerid updated",
      });
    } else {
      const newRoom = new roomModel({
        roomID: roomID,
        can_peerID: peerID,
      });

      let idSave = newRoom.save();
      res.status(200).json({
        message: "Candidate peerid saved",
      });
    }
  } catch (error) {
    res.status(500).message("Internal server error");
  }
}

async function getCandidatePeerID(req,res){
    try {
        
        let { roomID } = req.body;
        let roomExist = await roomModel.find({ roomID: roomID });

        if(roomExist.length==1){
            
            let {can_peerID} = roomExist[0]
            res.status(200).json({
                can_peerID
            })
        }
    } catch (error) {
        res.status(500).message("Internal server error");
    }
}

module.exports = peerRouter;
