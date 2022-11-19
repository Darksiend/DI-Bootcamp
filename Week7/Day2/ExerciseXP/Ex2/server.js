const User = { firstname: "John", lastname: "Doe" };

const http = require("http");

const server = http
  .createServer((req, res) => {
    res.setHeader("Content-type", "json");
    res.end(JSON.stringify(User));
  })
  .listen(8080);
