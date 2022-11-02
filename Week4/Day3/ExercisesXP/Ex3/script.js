//Ex 3
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

let res = epic.reduce((prev, next) => {
  return prev + " " + next;
});

console.log(res);
