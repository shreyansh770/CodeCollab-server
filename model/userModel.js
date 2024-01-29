const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const connectToMongoDB = require('../utils/mongo')

connectToMongoDB()

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  position:{
    type :String,
    required : true
  },
  isSuperAdmin: {
    type: Boolean,
    default : false
  },
  phoneNumber:{
    type:Number,
    required:true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },

});

userSchema.pre('save', async function (next) {
    const user = this;
  
    if (user.isModified('password')) {
      const saltRounds = 10;
      user.password = await bcrypt.hash(user.password, saltRounds);
    }
  
    next();
});
  

const User = mongoose.model('User', userSchema);

module.exports = User;
