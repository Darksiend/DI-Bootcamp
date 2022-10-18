//Ex1

const firsYear = 1999;
const secondYear = 1990;

date = secondYear + (firsYear - secondYear) * 2;

console.log(date);

//Ex2

let zip = "56734";

if (zip.length === 5) {
  let allNumbers = true;
  for (i = 0; i < zip.length && allNumbers == true; i++) {
    if (zip[i] >= "0" && zip[i] <= "9") {
      allNumbers = true;
    } else {
      console.log("Error!");
    }
  }
}

console.log(/^[0-9]+$/.test(zip));

if (/^[0-9]+$/.test(zip)) {
  console.log("Sucsess");
}

//Ex3

word = "aebhukldn";

console.log(
  word.replace(/[aeiouy]/gi, function (char) {
    if (char == "a") {
      return 1;
    }
    if (char == "e") {
      return 2;
    }
    if (char == "i") {
      return 3;
    }
    if (char == "o") {
      return 4;
    }
    if (char == "u") {
      return 5;
    }
  })
);
