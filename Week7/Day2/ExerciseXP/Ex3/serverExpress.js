const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>This is an HTML Tag!</h1>");
});
