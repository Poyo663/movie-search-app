const http = require("http");
const app = require("./app.js");

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("listening on port 3000");
});
