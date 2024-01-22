const express = require("express");

const { createMovie } = require("./movieController");

const router = express.Router();

router.post("/", createMovie);

module.exports = router;
