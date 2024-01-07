const express = require('express');
const authRouter = express.Router();

authRouter.post('/enterInterview', enterInterview);

async function enterInterview(req, res) {
  try {
    let { email, roomID } = req.body;
    
    /*
       -> check in db if the roomID matches to the email of the user
       -> if yes, create/enter the room corresponding to that roomID
    */

    res.status(200).json(roomID);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
}

module.exports = authRouter;
