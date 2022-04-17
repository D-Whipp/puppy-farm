const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
// console.log(data);
// *** Server ***
const server = http.createServer((req, res) => {
  // basic setup to ensure server is running
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.end(data);
  //   console.log(data);
});
server.listen(5500, "127.0.0.1", () => {
  console.log("Listening to requests on port 5500");
});
