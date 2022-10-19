//Ex1

//Part1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();

people[2] = "Jason";
people.push("Anton");
console.log(`Marrys Index is ${people.indexOf("Mary")}`);
let copySent = people.slice(1, 3);
people.indexOf("Foo");
//Its return -1 becouse we dont have Foo in our Array
let last = people[people.length - 1];
console.log(last);

//Part2

for (i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Jason") break;
}
//Ex2

const colors = ["Red", "Blue", "Orange"];
const suffixes = ["st", "nd", "rd"];

for (i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1} choice is ${colors[i]}`);
}

for (i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

//Ex3
