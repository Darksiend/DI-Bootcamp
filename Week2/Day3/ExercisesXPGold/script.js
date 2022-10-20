//Ex1
let numbers = [123, 8409, 100053, 333333333, 7];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//Ex2

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let userName = prompt("Whats your name?");

if (userName in guestList) {
  console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}.`);
} else {
  console.log("Hi! I'm a guest.");
}

//Ex3

let age = [20, 5, 12, 43, 98, 55];

let sum;

for (i = 0; i < age.length; i++) {
  sum += age[i];
}

console.log(sum);
let max = age[0];
for (i = 0; i < age.length; i++) {
  if (age[i] > max) {
    max = age[i];
  }
}

console.log(max);
