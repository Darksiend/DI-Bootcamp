//Rss Viewer
let Parser = require("rss-parser");
let parser = new Parser();

const express = require("express");
const app = express();
const logger = require("morgan");
const port = 3010;

let feed;
let listOfFeed;
app.use(logger("dev"));
app.set("view engine", "ejs");

const urlencodedParser = express.urlencoded({ extended: false });
app.route("/").get((req, res) => {
  (async () => {
    feed = await parser.parseURL("https://www.thefactsite.com/feed/");
    res.render("pages/index", { feed: feed.items });
    console.log(feed.items);
  })();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
