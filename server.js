// Loading required modules for server
var path = require("path");
var express = require("express");
var app = express();

// Defining a port
var port = process.env.PORT || 8080;  // Get PORT from environment if present, otherwise use 8080 by default

// Serve static files from "dist" directory
app.use(express.static(__dirname + "/dist"));

// For all get requests, redirect to index.html
app.get("/*", function (req,res) {
  res.sendfile(path.join(__dirname + "/dist/index.html"));
});

// Start the app and listens to heroku port
app.listen(port, function () {
  console.log("Server started running at port " + port);
});
