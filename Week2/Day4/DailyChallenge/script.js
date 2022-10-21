//Daily Challenge

let promtString = prompt("Put Words separeted by commas");

let words = promtString.split(",");
let maxLength = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length > maxLength) {
    maxLength = words[i].length;
  }
}

for (let i = 0; i < words.length; i++) {
  if (i === 0) {
    console.log("*".repeat(maxLength + 2));
  }

  console.log("*" + words[i] + " ".repeat(maxLength - words[i].length) + "*");

  if (i === words.length - 1) {
    console.log("*".repeat(maxLength + 2));
  }
}
