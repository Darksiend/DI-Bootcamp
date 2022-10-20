//Ex1

function infoAboutMe() {
  console.log("Hi Im Anton!!!");
}
infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
  );
}

infoAboutPerson("Anton", 23, "blue");
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//Ex2

function calculateTip() {
  let bill = prompt("Bill");
  if (!isNaN(bill)) {
    if (bill < 50) {
      console.log(
        `Your tip: ${(bill * 0.2).toFixed(2)} and your bill is ${(
          bill * 1.2
        ).toFixed(2)}`
      );
    } else if (bill > 50 && bill < 200) {
      console.log(
        `Your tip: ${(bill * 0.15).toFixed()} and your bill is ${(
          bill * 1.15
        ).toFixed(2)}`
      );
    } else if (bill > 200) {
      console.log(
        `Your tip: ${(bill * 0.1).toFixed(2)} and your bill is ${(
          bill * 1.1
        ).toFixed(2)}`
      );
    }
  }
}

//calculateTip();

//Ex3

function isDivisible(divisor) {
  let outcome = "";
  let sum = 0;
  for (i = 0; i < 500; i++) {
    if (i % divisor === 0) {
      outcome += i + " ";
      sum = +i;
    }
  }
  console.log(`Outcome: ${outcome} \n and Sum: ${sum}`);
}

isDivisible(3);
isDivisible(45);

//Ex4

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let price = 0;
  for (i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i] in stock) {
      price += prices[shoppingList[i]];
    }
  }
  return price;
}

let price = myBill();
console.log(price);
