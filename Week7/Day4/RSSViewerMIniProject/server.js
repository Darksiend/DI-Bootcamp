//Rss Viewer
let Parser = require("rss-parser");
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(item.title + ":" + item.link);
  });
})();
