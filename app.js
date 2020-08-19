// node server setup
//
// Express makes it easier to write node server codes.
// you first need to install express by => npm insall express --save or -s
// from there you can then move

const express = require("express");

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello ExpressJS");
});

app.listen(port, () => {
  console.log("Server is running......");
});
