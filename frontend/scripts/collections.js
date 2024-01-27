const user = "anna";

$(document).ready(async () => {
  await fetch("/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      owner: "anna",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      for (const c of data) {
        console.log(c);

        const title = $(`<p>${c.title}</p>`);
        const insideBar = $("<div class='inside-bar'></div>");
        const movie = $("<div class='movie'></div>");

        $(insideBar).append(title);
        $(movie).append(insideBar);
        $(".collections").append(movie);
      }
    })
    .catch((err) => console.log(err));
});
