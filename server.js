var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

var PORT = process.env.PORT || 3000;

var routes= require("./controllers/routes.js");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/daytondaily";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Initialize Express
var app = express();

// Configure middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: true
}));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));


// Handlebars ---------------------------------------------------------
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main",
  partialsDir: path.join(__dirname, "/views/layouts/partials")
}));
app.set("view engine", "handlebars");

app.use(routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/daytondaily");


// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});