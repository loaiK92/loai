const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/index");
const mongoose = require("mongoose");

// import environmental variables from our variables.env file
require("dotenv").config({ path: "./variables.env" });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// import all models
require("./models/Mail");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/", routes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
