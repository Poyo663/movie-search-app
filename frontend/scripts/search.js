const input = document.getElementById("input");
const button = document.getElementById("button");

$(button).on("click", async () => {
  $.get(`http://www.omdbapi.com/?s=${input.value}&apikey=e05dcf65`, (data) => {
    $(".movies").empty();
    data.Search.forEach((element) => {
      const a = $("<a>", {
        href: "/",
      }).appendTo($(".movies"));
      const hElem = $("<img>", {
        src: element.Poster,
        height: "250px",
      }).appendTo(a);
      $(a).on("click", () => {
        document.cookie = element.Title + "; path=/";
      });
    });
  });
});
