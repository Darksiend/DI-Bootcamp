//Shopping List
const express = require("express");
const app = express();
const logger = require("morgan");
const port = 3002;

let listOfItems = [];

app.use(logger("dev"));
app.set("view engine", "ejs");

const urlencodedParser = express.urlencoded({ extended: false });
app
  .route("/")
  .get((req, res) => {
    console.log(req.params);
    res.render("main", { listOfItems: listOfItems });
  })
  .post(urlencodedParser, (req, res) => {
    if (req.body) {
      addItemToList(req.body, req);
      console.log(listOfItems);
      console.log(req.body);
      res.redirect("/");
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function addItemToList(itemObj) {
  console.log(itemObj);
  if (!ifInList(itemObj)) {
    listOfItems.push(itemObj);
  }

  console.log(listOfItems);
}

function ifInList(obj) {
  listOfItems.forEach((el) => {
    if (el === obj) return true;
  });
  return false;
}
