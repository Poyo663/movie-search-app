const path = require("path");
const express = require("express");

const app = express();

const moviesRouter = require("./src/controllers/movies/movieRouter");

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));

app.use("/movies", moviesRouter);

module.exports = app;
