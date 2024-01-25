const input = document.getElementById("input");
const button = document.getElementById("button");
const ENTER = 13;

async function getRequest() {
  $.get(`http://www.omdbapi.com/?s=${input.value}&apikey=e05dcf65`, (data) => {
    $(".movies").empty();
    data.Search.forEach((element) => {
      const a = $("<a>", {
        href: "/movie.html",
      }).appendTo($(".movies"));
      const hElem = $("<img>", {
        src: element.Poster,
        height: "250px",
      }).appendTo(a);
      $(a).on("click", () => {
        document.cookie = element.Title;
      });
    });
  });
}

$(button).on("click", getRequest);
$(document).keypress(async (e) => {
  if (e.keyCode === ENTER) {
    await getRequest();
  }
});
