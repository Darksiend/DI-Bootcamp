var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/", function(req, res) {
  console.log(req.params);
  res.send(req.params);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
