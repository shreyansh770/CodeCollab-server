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

    const io = req.io; 
    io.emit('joininterview',roomID);

    res.status(200).send('User entered the room successfully');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
}

module.exports = authRouter;
