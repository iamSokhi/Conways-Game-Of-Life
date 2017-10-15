const path = require('path');
const express = require('express');
const app = express();

// Serve static files from "dist" directory
app.use(express.static(__dirname + '/dist'));

// For all get requests, redirect to index.html
app.get('/*', function (req,res) {
  res.sendfile(path.join(__dirname + '/dist/index.html'));
});

// Start the app and listens to heroku port
app.listen(process.env.PORT || 8080);
