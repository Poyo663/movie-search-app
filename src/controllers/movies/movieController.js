const {
  findMovies,
  findMoviesWithOwner,
  addMovie,
} = require("../../models/moviesModel");

async function getMoviesByName(req, res) {
  const result = await findMovies(req.body.title);
  if (!result)
    return res
      .status(404)
      .json({ message: "could not find the title you're looking for'" });

  return res.status(201).json(result);
}
async function getMoviesByOwner(req, res) {
  const result = await findMoviesWithOwner(req.body.owner);
  if (!result)
    return res.status(404).json({
      message:
        "could not find the collection with the owner you're looking for'",
    });

  return res.status(201).json(result);
}

async function getCollection(req, res) {
  if (req.body.title) return await getMoviesByName(req, res);
  else if (req.body.owner) return await getMoviesByOwner(req, res);

  return res.status(400).json({ message: "obligatory field not found" });
}
async function createMovie(req, res) {
  if (!req.body.title || !req.body.owner) return getCollection(req, res);

  const result = await addMovie(
    req.body.title,
    req.body.owner,
    req.body.collect,
  );
  if (!result)
    return res
      .status(500)
      .json({ message: "something went wrong while retrieving the data" });

  return res.status(201).json(result);
}

module.exports = {
  createMovie,
  getCollection,
};
