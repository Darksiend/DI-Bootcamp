const fs = require("fs");

fs.writeFile("some.txt", "hi!", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File created!");
  }
});
fs.appendFile("some.txt", "Appended", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
fs.unlinkSync("some.txt", (err) => {
  if (err) throw err;
  console.log("Deleted");
});
