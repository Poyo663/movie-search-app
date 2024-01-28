const express = require("express");

const { createMovie, addMovieToCollection } = require("./movieController");

const router = express.Router();

router.post("/", createMovie);
router.put("/", addMovieToCollection);

module.exports = router;
