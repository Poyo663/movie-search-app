const movieModel = require("../schemas/movies");

async function findMovies(collectionTitle) {
  return await movieModel.findOne({ title: collectionTitle }).catch((err) => {
    console.error(err);
    return null;
  });
}
async function findMoviesWithOwner(ownerName) {
  return await movieModel.find({ owner: ownerName }).catch((err) => {
    console.error(err);
    return null;
  });
}
async function addFilmToCollection(title, movieTitle) {
  const movie = await movieModel.findOne({ title: title });
  if (!movie) return null;

  for (const m of movie.movie) {
    if (m === movieTitle) return null;
  }

  movie.movie.push(movieTitle);
  movie.save();
  return movie;
}
async function addMovie(title, owner, collect = []) {
  return await movieModel
    .create({
      title: title,
      owner: owner,
      movie: collect,
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
}

module.exports = {
  addMovie,
  findMovies,
  addFilmToCollection,
  findMoviesWithOwner,
};
