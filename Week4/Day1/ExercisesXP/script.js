// //Ex1
// // #1
// function funcOne() {
//   let a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   console.log("inside the funcOne function ", a);
// }

// // #1.1 - run in the console:
// funcOne();
// // #1.2 What will happen if the variable is declared
// // with const instead of let ?
// //Error

// //#2
// let a = 0;
// function funcTwo() {
//   a = 5;
// }

// function funcThree() {
//   console.log("inside the funcThree function ", a);
// }

// // #2.1 - run in the console:
// funcThree();
// funcTwo();
// funcThree();
// // #2.2 What will happen if the variable is declared
// // with const instead of let ?

// //#3
// function funcFour() {
//   window.a = "hello";
// }

// function funcFive() {
//   alert("inside the funcFive function ", a);
// }

// // #3.1 - run in the console:
// funcFour();
// funcFive();

// //#4
// let a = 1;
// function funcSix() {
//   let a = "test";
//   console.log("inside the funcSix function ", a);
// }

// // #4.1 - run in the console:
// funcSix();
// // #4.2 What will happen if the variable is declared
// // with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//   let a = 5;
//   console.log("in the if block ", a);
// }
// console.log("outside of the if block ", a);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared
// // with const instead of let ?

//Ex2

// function winBattle() {
//   return true;
// }

let winBattle = () => {
  return true;
};

let experiencePoints;

if (winBattle() === true) {
  experiencePoints = 10;
} else {
  experiencePoints = 1;
}

console.log(experiencePoints);

//Ex3

let isString = (input) => {
  return typeof input === "string";
};
console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false

//Ex4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
function colorsChecker(colors) {
  const isViolet = (element) =>
    element === "Violet" ? console.log("Yeah") : console.log("No...");
  colors.forEach(function (item, i, arr) {
    console.log(`${i}# choice is ${item}.`);
    console.log(isViolet(item));
  });
}
colorsChecker(colors);

//Ex5

const colors2 = [
  "Blue",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow",
];
const ordinal = ["th", "st", "nd", "rd"];

function colorLogger(colors2, ordinal) {
  colors.forEach((color, index) => {
    console.log(
      `${index + 1}${
        index > 3 ? ordinal[0] : ordinal[index]
      } choice is ${color}  `
    );
  });
}

colorLogger(colors, ordinal);

//Ex6

let bankAmount = 10000;
const vat = 0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];
let vatMult = (details) => {
  details.forEach((item, index) => {
    bankAmount = bankAmount + Number(item) * (1 + vat);
  });
};

for (let i = 0; i < details.length; i++) console.log(Number(details[i]));
vatMult(details);
console.log(bankAmount);
