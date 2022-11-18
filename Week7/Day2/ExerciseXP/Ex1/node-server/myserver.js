const http = require("http");

const server = http
  .createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Hi1</h1><h1>Hi2</h1><p>Hi3</p>");
  })
  .listen(3000);
