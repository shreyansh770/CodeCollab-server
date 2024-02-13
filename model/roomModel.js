const mongoose = require('mongoose');





const roomSchema = new mongoose.Schema({
    roomID :{
        type: String,
        unique: true,
    },

    inv_email:{
      type: String,
    },

    can_email:{
      type:String
    },

    inv_peerID:{
      type:String
    },

    can_peerID :{
      type: String
    }
})

const roomModel = mongoose.model('roomModel',roomSchema)

module.exports = roomModel