//Rss Viewer
let Parser = require("rss-parser");
let parser = new Parser();

const express = require("express");
const app = express();
const logger = require("morgan");
const port = 3003;

let listOfItems = [];

app.use(logger("dev"));
app.set("view engine", "ejs");

const urlencodedParser = express.urlencoded({ extended: false });
app.route("/").get((req, res) => {
  console.log(req.params);
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
(async () => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ":" + item.link);
  });
})();
