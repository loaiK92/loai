const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MailSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please Enter Your Name!!"
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: "Please Enter Your Email Address!!"
  },
  text: {
    type: String,
    required: "Please Type a Message!!"
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Mail", MailSchema);
