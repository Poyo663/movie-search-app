const user = "anna";

$(document).ready(async () => {
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
        console.log(c);

        const a = $("<a>", {
          href: "/collect.html",
        });
        $(a).on("click", () => {
          document.cookie = c.title;
        });

        const title = $(`<p>${c.title}</p>`);
        const insideBar = $("<div class='inside-bar'></div>");
        const movie = $("<div class='movie'></div>");

        $(insideBar).append(title);
        $(movie).append(insideBar);
        $(a).append(movie);
        $(".collections").append(a);
      }
    })
    .catch((err) => console.log(err));
});
