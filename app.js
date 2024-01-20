0onst path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/hey", (req, res) => {
  console.log("got it!");
  res.send("you clicked! ;)");
});

module.exports = app;
