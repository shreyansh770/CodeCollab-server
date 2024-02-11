const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendMail(type, data, recipient) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  // verification
  if (type == 1) {
  } else if (type == 2) {
    // forgot password

    let info = await transporter.sendMail({
      from: `"Interview Sync" ${process.env.NODEMAILER_EMAIL}`,
      to: recipient,
      subject: "Email verification for Interview sync",
      text: `${data}`,
    });

  } else {
    let info = await transporter.sendMail({
      from: `"Interview Sync" ${process.env.NODEMAILER_EMAIL}`,
      to: recipient,
      subject: "Interview Invite",
      text: `${data}`,
    });
  }
}

module.exports = sendMail;
