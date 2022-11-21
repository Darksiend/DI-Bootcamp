const express = require("express");
var morgan = require("morgan");
const app = express();
const logger = require("morgan");
const port = 3000;
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.route("/register").get((req, res) => {
  res.render("register");
});

app.listen(port, () => {
  console.log("Port:", port);
});
