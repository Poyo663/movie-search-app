const express = require("express");

const { createMovie, getCollection } = require("./movieController");

const router = express.Router();

router.post("/", createMovie);

module.exports = router;
