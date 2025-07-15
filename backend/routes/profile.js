const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/profile", async (req, res) => {
  const { fullName, branch, linkedin, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "rgverse2025@gmail.com",
    subject: `New Profile Submission from ${fullName}`,
    text: `Name: ${fullName}\nBranch: ${branch}\nLinkedIn: ${linkedin}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Profile submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit profile.", error });
  }
});

module.exports = router;
