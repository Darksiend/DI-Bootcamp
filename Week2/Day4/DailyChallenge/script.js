//Daily Challenge
let words = ["Hello", "World", "in", "a", "frame"];
let length = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length > length) {
    length = words[i].length;
  }
}
