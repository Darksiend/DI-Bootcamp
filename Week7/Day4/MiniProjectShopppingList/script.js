//Shopping List
const express = require("express");
const app = express();
const logger = require("morgan");
const port = 3001;

app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.static("public/mainPage"));
app.route("/").get((req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname, "/public/mainPage/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
