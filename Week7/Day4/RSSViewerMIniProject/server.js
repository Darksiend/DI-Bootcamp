//Rss Viewer
let Parser = require("rss-parser");
let parser = new Parser();

const express = require("express");
const app = express();
const logger = require("morgan");
const port = 3010;

let feed;
let listOfFeed;
app.use(express.static(__dirname + "public"));

app.use(logger("dev"));
app.set("view engine", "ejs");

const urlencodedParser = express.urlencoded({ extended: false });
app.route("/").get((req, res) => {
  (async () => {
    feed = await parser.parseURL("https://www.thefactsite.com/feed/");
    res.render("pages/index", { feed: feed.items });
  })();
});

app
  .route("/search")
  .get((req, res) => {
    (async () => {
      feed = await parser.parseURL("https://www.thefactsite.com/feed/");
      console.log(req.params);
      res.render("pages/search", { feed: feed.items });
    })();
  })
  .post(urlencodedParser, (req, res) => {
    (async () => {
      let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
      console.log("Body:", req.body);
      let resFeedItems = [];
      feed.items.forEach((el, index) => {
        console.log(el.title.includes(req.body.title));
        if (
          el.title
            .toLocaleLowerCase()
            .includes(req.body.title.toLocaleLowerCase()) &&
          (el.categories.includes(req.body.category) ||
            req.body.category === "all")
        ) {
          resFeedItems.push(el);
        }
      });

      res.render("pages/search", { feed: resFeedItems });
    })();
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function getListOfRSS() {
  return await parser.parseURL("https://www.thefactsite.com/feed/");
  res.render("pages/search", { feed: feed.items });
}
