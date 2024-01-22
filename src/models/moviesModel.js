const movieModel = require("../schemas/movies");

async function addMovie(title, owner, collect = []) {
  return await movieModel
    .create({
      title: title,
      owner: owner,
      movie: collect,
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = {
  addMovie,
};
