const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Mail = require("../models/Mail");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/home", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/work", (req, res) => {
  res.render("work");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact/submit", async (req, res) => {
  const newMail = new Mail(req.body);
  const mail = await newMail.save();
  const mailOptions = {
    from: newMail.email,
    to: "loaikahel723@gmail.com",
    subject: `Hey Loai You Have Got an E-mail From ${newMail.name}`,
    html: newMail.text
  };
  transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
      res.status(304).json("not done");
    } else {
      console.log(info);
      res.status(200).json("done");
    }
  });
});

module.exports = router;
