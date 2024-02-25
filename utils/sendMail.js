const nodemailer = require("nodemailer");
const { getCandidateEmailTemplate, getInterviewerEmailTemplate } = require("../templates/emailTemplates");
require("dotenv").config();



async function sendMail(type, data, recipient , role , date , time,flag,can_email) {
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

    
    let template = (flag==1)? getCandidateEmailTemplate(recipient,"Interview Sync",role,date,time,data):getInterviewerEmailTemplate(recipient,role,date,time,can_email,data)

    let info = await transporter.sendMail({
      from: `"Interview Sync" ${process.env.NODEMAILER_EMAIL}`,
      to: recipient,
      subject: "Interview Invite",
      html: template,
    });
  }
}

module.exports = sendMail;
