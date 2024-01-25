const express = require("express");

const { createMovie, getCollection } = require("./movieController");

const router = express.Router();

router.get("/", getCollection);
router.post("/", createMovie);

module.exports = router;
