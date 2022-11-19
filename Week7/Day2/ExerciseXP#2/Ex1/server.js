const express = require("express");

const app = express();

const PORT = 3000;

const User = { firstname: "John", lastname: "Doe" };
app.use("/", express.static("public"));
app.get("/", (req, res) => {
  console.log(res);
  res.send("Ok");
});
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
