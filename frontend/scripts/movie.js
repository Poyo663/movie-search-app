const user = "anna";

function makeListItem(name) {
  const div = $("<div class='list-item'></div>");
  const checkbox = $("<input type='checkbox' />");
  const text = $(`<text>${name}</text>`);

  $(div).append(checkbox);
  $(div).append(text);

  return div;
}
$(window).ready(async () => {
  //populate the collections list
  await fetch("/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      owner: user,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      for (const c of data) {
        $(".list").append(makeListItem(c.title));
      }
    });

  //get the movie data
  $.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=e05dcf65&t=${document.cookie}`,
    (data) => {
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
    },
  );
});

$(".exit").on("click", () => {
  $(".popup-menu").hide();
});
$("#add-me-button").on("click", async () => {
  $(".popup-menu").show();
});
$("#add").on("click", async () => {
  for (const element of document.querySelector(".list").children) {
    if (element.firstChild.checked == false) continue;

    const name = element.lastChild.textContent;
    const movie = $("#title").text();

    await fetch("/movies", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: name,
        movieTitle: movie,
      }),
    }).catch((err) => console.error(err));
  }
  $(".popup-menu").hide();
});
