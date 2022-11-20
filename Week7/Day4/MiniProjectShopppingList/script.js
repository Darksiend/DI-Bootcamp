//Shopping List
const express = require("express");
const app = express();
const logger = require("morgan");
const port = 3001;

app.use(logger("dev"));
app.set("view engine", "ejs");

app
  .route("/")
  .get((req, res) => {
    console.log(req.params);
    res.render("main", { nameRestaurant: "Papa Pizza" });
  })
  .post((req, res) => {
    console.log();
    res.render("main", { nameRestaurant: "Papa Pizza" });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
