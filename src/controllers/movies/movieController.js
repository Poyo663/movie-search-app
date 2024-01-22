const { addMovie } = require("../../models/moviesModel");

async function createMovie(req, res) {
  if (!req.body.title || !req.body.owner)
    return res.status(400).json({ message: "obligatory field not found" });

  const result = await addMovie(req.body.title, req.body.owner, req.body.collect);
  if (!result)
    return res
      .status(500)
      .json({ message: "something went wrong while retrieving the data" });

  return res.status(201).json(result);
}

module.exports = {
  createMovie,
};
