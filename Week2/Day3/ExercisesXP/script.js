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

// let number;
// do {
//   number = prompt("Put a number > 10");
// } while (number < 10 && typeof number != "number");

//Ex 4

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);
console.log(
  `on first floor ${building.numberOfAptByFloor.firstFloor} and on third ${building.numberOfAptByFloor.thirdFloor}`
);

console.log(Object.keys(building.numberOfRoomsAndRent));

let namesOfTenants = Object.keys(building.numberOfRoomsAndRent);
console.log(building.key);

console.log(`name of the second tenant: ${namesOfTenants[1]}`);
console.log(
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
    building.numberOfRoomsAndRent.dan + 1200
);

console.log(building.numberOfRoomsAndRent);

//Ex5

const family = {
  mother: "Katya",
  father: "Bob",
  brother: "Alon",
};

for (key in family) {
  console.log(key);
}

//Ex6

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

let sentence = "";

for (key in details) {
  sentence += key + " ";
  sentence += details[key] + " ";
}

console.log(sentence);

//Ex7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let currentName = "";

for (i = 0; i < names.length; i++) {
  currentName += names[i][0];
}

console.log(currentName.split("").sort());
