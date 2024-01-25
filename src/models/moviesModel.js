const movieModel = require("../schemas/movies");

async function findMovies(collectionTitle) {
  return await movieModel.findOne({ title: collectionTitle }).catch((err) => {
    console.error(err);
    return null;
  });
}
async function findMoviesWithOwner(ownerName) {
  return await movieModel.findOne({ owner: ownerName }).catch((err) => {
    console.error(err);
    return null;
  });
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
  findMoviesWithOwner,
};
