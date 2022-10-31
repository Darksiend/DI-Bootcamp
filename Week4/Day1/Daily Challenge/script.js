const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
let usernames = [];
let moreThan = [];
gameInfo.forEach((obj) => {
  usernames.push(obj.username + "!");
});

gameInfo.forEach((obj) => {
  if (obj.score > 5) moreThan.push(obj.username);
});

console.log(usernames);
console.log(moreThan);
