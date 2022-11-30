const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const morgan = require("morgan");
const { json } = require("express");
app.use(cors());
app.use(morgan("dev"));
const urlencodedParser = express.urlencoded({ extended: true });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.route("/api/hello").get((req, res) => {
  res.json({ msg: "Hello From Express" });
});

app.route("/api/world").post(urlencodedParser, (req, res) => {
  console.log(req.body);

  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
