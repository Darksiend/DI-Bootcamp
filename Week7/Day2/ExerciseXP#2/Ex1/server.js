const express = require("express");

const app = express();

const PORT = 3000;

const User = { firstname: "John", lastname: "Doe" };
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(User);
});
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
