var express = require("express");
var app = express();
const morgan = require("morgan");
const urlencodedParser = express.urlencoded({ extended: false });
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.static("error404"));
app.get("/", function (req, res) {
  console.log(req.params);
  res.send(req.params);
});

app.get("/aboutMe/:hobby", (req, res) => {
  let params = req.params;
  if (isNaN(Number(params.hobby))) {
    console.log("Its String");
    res.send(params);
  } else {
    res.sendStatus(404);
  }
  res.send(req.params);
});

app.route("/pic").get((req, res) => {
  res.sendFile(__dirname + "/public/pic/index.html");
});

app.route("/form").get((req, res) => {
  res.sendFile(__dirname + "/public/form/index.html");
});

app.route("/formData").post(urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send(`Hi! ${req.body.email} send you a message: ${req.body.message}`);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
