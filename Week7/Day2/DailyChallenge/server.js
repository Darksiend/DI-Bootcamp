var express = require("express");
var app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.static("error404"));
app.get("/", function(req, res) {
  console.log(req.params);
  res.send(req.params);
});

app.get("/aboutMe/:hobby", (req, res) => {
  let params = req.params;
  if (isNaN(Number(params.hobby))) {
    console.log("Its String");
  } else {
    res.sendStatus(404);
    console.log("Not String");
  }
  res.send(req.params);
});

app.route("/pic").get((req, res) => {
  let img = "<img src='/minion.png'>";
  res.send(img);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
