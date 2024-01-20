$(window).ready(async () => {
  const data = await fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=e05dcf65&t=Soul",
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      $("#poster").attr("src", data.Poster);
      $("#title").text(data.Title);
      $("#date").text("Released in: " + data.Released);

      $("#rated").text(data.Rated);
      switch (data.Rated) {
        case "G":
          $("#rated").css("background-color", "green");
          break;
        case "PG":
          $("#rated").css("background-color", "orange");
          break;
        case "PG-13":
          $("#rated").css("background-color", "purple");
          break;
        case "R":
          $("#rated").css("background-color", "red");
          break;
        case "NC-17":
          $("#rated").css("background-color", "blue");
          break;
      }

      $("#runtime").text("Runtime: " + data.Runtime);
      $("#genre").text("Genre: " + data.Genre);
      $("#director").text("Director(s): " + data.Director);
      $("#writers").text("Writer(s): " + data.Writer);
      $("#actors").text("Actors: " + data.Actors);
      $("#plot").text("Sinopses: " + data.Plot);
      $("#rating").text("Rating: " + data.Ratings[0].Value);
    })
    .catch((err) => console.error(err));
});
