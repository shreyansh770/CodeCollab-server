const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const validateUserInput = require("../utils/validateInputs");
const { jwtsign } = require("../utils/jwt");
require("dotenv").config();

async function createUser(req, res) {
  try {
    const { name, email, password, isSuperAdmin, company } = req.body;

    let validation = validateUserInput(name, email, password, isSuperAdmin, company);

    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    const user = new User({
      name,
      email,
      password,
      isSuperAdmin,
      company,
    });

    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    let validation = validateUserInput(email, password);

    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }

    const user = await User.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // let expiry = parseInt(process.env.JWT_EXPIRY_CONFIG,10);
        let expiry = 2 * 24 * 60 * 60 * 1000;

        let payload = {
          email: user.email,
          isSuperAdmin: user.role == false ? 0 : 1,
        };

        let token = jwtsign(payload);

        res.cookie("jwt_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + expiry),
        });

        user.password = undefined

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

module.exports = {
  enterInterview,
  createUser,
  login,
};
