$(document).ready(async () => {
  const movies = await fetch("/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.cookie,
    }),
  }).then((res) => res.json());

  movies.movie.forEach(async (element) => {
    $.get(`http://www.omdbapi.com/?t=${element}&apikey=e05dcf65`, (data) => {
      const a = $("<a>", {
        href: "/movie.html",
      }).appendTo($(".movies"));
      $("<img>", {
        src: data.Poster,
        height: "250px",
      }).appendTo(a);

      $(a).on("click", () => {
        document.cookie = data.Title;
      });
    }).catch((err) => console.error(err));
  });
});
