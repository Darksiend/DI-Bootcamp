const { log } = require("console");
let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is HTML tag!!!</h1>");
});

app.listen(3000, () => {
  console.log("Server started!");
});
