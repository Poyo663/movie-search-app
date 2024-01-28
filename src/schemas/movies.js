const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  owner: String,
  movie: { type: [String], default: [] },
});

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
