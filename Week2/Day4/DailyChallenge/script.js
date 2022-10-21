//Daily Challenge
let words = ["Hello", "World", "in", "a", "frame"];
let length = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length > length) {
    length = words[i].length;
  }
}

let patternBorder = "";

for (let i = 0; i < length; i++) {
  if (i === 0) {
    console.log("*".repeat(length + 2));
  }

  console.log("*" + words[i] + " ".repeat(length - words[i].length) + "*");

  if (i === length - 1) {
    console.log("*".repeat(length + 2));
  }
}
