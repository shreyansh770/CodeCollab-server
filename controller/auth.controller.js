const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const User = require("../model/userModel");
const validateUserInput = require("../utils/validateInputs");
const { jwtsign } = require("../utils/jwt");
const Company = require("../model/companyModel");
require("dotenv").config();
const convertBase64 = require("../utils/base64");
const cloudinary = require("../config/cloudinary");
const generateOTP = require("../utils/OTPgenerator");
const sendMail = require("../utils/sendMail");


async function createUser(req, res) {
  try {
    const {
      name,
      email,
      password,
      position,
      phoneNumber,
      isSuperAdmin,
      company,
    } = req.body.data;

    let validation = validateUserInput(
      name,
      email,
      password,
      position,
      phoneNumber,
      company
    );

    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    const user = new User({
      name,
      email,
      password,
      isSuperAdmin,
      position,
      phoneNumber,
      company,
    });

    const savedUser = await user.save();
    res.status(200).json({ user: savedUser, company });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function register(req, res, next) {
  try {
    let {
      businessName,
      businessEmail,
      country,
      companyWebsite,
      streetAddress,
      city,
      state,
      zipCode,
      GSTIN,
    } = JSON.parse(req.body.data);

    let validation = validateUserInput(
      businessName,
      businessEmail,
      country,
      companyWebsite,
      streetAddress,
      city,
      state
    );

    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    let file = req.file ? req.file : null;

    let dataURI = convertBase64(file);

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "interview-files",
      allowed_formats: ["png", "jpeg", "jpg"],
      public_id: uuidv4(),
    });

    const newCompany = new Company({
      businessName,
      businessEmail,
      country,
      logo: result.secure_url,
      companyWebsite,
      streetAddress,
      city,
      state,
      zipCode,
      GSTIN,
    });

    const savedCompany = await newCompany.save();

    if (savedCompany._id) {
      req.body.data = {
        ...JSON.parse(req.body.data),
        company: savedCompany._id,
      };
      next();
    } else {
      res.status(404).send("Data could not be saved");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    let validation = validateUserInput(email, password);

    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    const user = await User.findOne({ email }).populate("company");

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // let expiry = parseInt(process.env.JWT_EXPIRY_CONFIG,10)
        let expiry = 2 * 24 * 60 * 60 * 1000;

        let payload = {
          _id: user._id,
          company: user.company,
          isSuperAdmin: user.role == false ? 0 : 1,
        };

        let token = jwtsign(payload);

        res.cookie("jwt_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + expiry),
        });

        user.password = undefined;

        res.status(200).json({ message: "Login successful", user });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function logout(req, res) {
  try {
    res.cookie("jwt_token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getLoginInUser(req, res) {
  try {
    let { _id } = req.isVerified;

    let user = await User.findOne({ _id });

    if (user) {
      user.password = undefined;
      res.status(200).json({ message: "User successfully fetched", user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function enterInterview(req, res) {
  try {
    let { email, roomID } = req.body;

    /*
         -> check in db if the roomID matches to the email of the user
         -> if yes, create/enter the room corresponding to that roomID
      */

    res.status(200).json(roomID);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

async function getOTP(req, res) {
  try {
    let { email } = req.body;

    let user = await User.findOne({ email: email });

    if (user) {

      let otp = generateOTP()

       await User.findOneAndUpdate(
         { email: email },
         { otp: otp },
         { new: true }
       );

      sendMail(2 , otp , email)

      res.status(200).json({ message: "OTP successfully sent" });

    } else {
      res.status(404).json({ message: "No user exist" });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

async function verifyOTP(req, res) {
  try {
    let { email, otp, password } = req.body;

    let user = await User.findOne({ email });

    let savedotp = user.otp;

    password = await bcrypt.hash(password, 10);

    if (savedotp == otp) {
      let result = await User.findOneAndUpdate(
        { email: email },
        { password: password , $unset : {otp : 1} },
        { new: true }
      );

      result.password = undefined;
      res.status(200).json({ message: "password", result });
    } else {
      res.status(404).json({ message: "OTP did not match" });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

module.exports = {
  enterInterview,
  createUser,
  login,
  logout,
  register,
  getLoginInUser,
  getOTP,
  verifyOTP,
};
