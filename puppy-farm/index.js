const http = require("http");
const url = require("url");

// *** Server ***
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Up & Running!");
});
server.listen(5500, "127.0.0.1", () => {
  console.log("Listening to requests on port 5500");
});
