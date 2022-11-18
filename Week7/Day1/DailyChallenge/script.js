const largeNumber = require("./main.js");
currentDate = require("./main.js");
const b = 5;
console.log(largeNumber + b);

let http = require("http");
const server = http
  .createServer((req, res) => {
    console.log("Im Listening");
    res.setHeader("Content-type", "text/html");
    res.end(
      `<p>My Module is ${largeNumber}</p><h1>Hi there at the frontend</h1><p>${currentDate()}</p>`
    );
  })
  .listen(3000);
