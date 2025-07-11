const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  // Configure your email transport (using Gmail here)
   const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.GMAIL_USER,
       pass: process.env.GMAIL_PASS,
     },
   });

  const mailOptions = {
    from: email,
    to: "rgverse2025@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email.", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
