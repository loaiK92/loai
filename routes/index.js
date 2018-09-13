const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Mail = require("../models/Mail");
const nodemailer = require("nodemailer");

// import environmental variables from our variables.env file
require("dotenv").config({ path: "./variables.env" });

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
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
  const html = newMail.text.replace(new RegExp("\n", "g"), "<br>");
  const mailOptions = {
    from: newMail.email,
    to: "loaikahel723@gmail.com",
    subject: `New E-mail From "${newMail.email}"`,
    text: newMail.text,
    html: `<div style="border-top: 0.5px solid #ccc; padding: 2%;">
    <p style="font-size:1.5em;">" <strong style="color: skyblue;">${
      newMail.name
    } </strong>" Has Sent You :</p>
    <p style="font-size:1.3em;">${html}</p>
    </div>`
  };

  transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log("the error is ", err);
      res.status(304).json("not done");
    } else {
      console.log("the info is ", info);
      res.status(200).json("done");
    }
  });
});

module.exports = router;
