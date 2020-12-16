const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
  if (res.url === "/course/api") {
    res.write(JSON.stringify([1, 2, 3]));
  }
});
server.listen(3000);
