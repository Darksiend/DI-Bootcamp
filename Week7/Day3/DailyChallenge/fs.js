//DailyChallenge
const fs = require("fs");
let arr = [];
fs.readFile("RightLeft.txt", "utf8", (err, data) => {
  if (err) throw err;
  arr = data.split("");
  let currentPos = 0;
  let steps = 0;
  let numberofSteps = 0;
  arr.forEach((el) => {
    if (el === "<") {
      currentPos -= 1;
    } else if (el === ">") {
      currentPos += 1;
    }
    steps += 1;
    if (currentPos === -1 && numberofSteps === 0) {
      numberofSteps = steps;
      console.log(
        "Number of steps needed to hit the -1 position:",
        numberofSteps
      );
    }
  });
  if (currentPos > 0) {
    console.log(`Your pos is ${currentPos} to right.`);
  } else if (currentPos < 0) {
    console.log(`Your pos is ${currentPos} to right.`);
  }
});
