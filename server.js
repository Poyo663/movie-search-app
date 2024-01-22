require("dotenv").config();
const http = require("http");

const mongoose = require("mongoose");

const app = require("./app.js");

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("connected");
});

async function connectDB() {
  await mongoose.connect(process.env.DB_URL);
}

server.listen(3000, async () => {
  await connectDB();
  console.log("listening on port 3000");
});
