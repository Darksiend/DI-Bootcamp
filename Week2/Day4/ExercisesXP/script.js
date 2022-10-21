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
    if (shoppingList[i] in stock && stock[shoppingList[i]] > 0) {
      stock[shoppingList[i]] -= 1;
      price += prices[shoppingList[i]];
    }
  }
  return price;
}

let price = myBill();

console.log(`Price of ypur Shopping list is: ${price} `);

//Ex5

// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

function changeEnough(itemPrice, amountOfChange) {
  let amount =
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.1 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;
  if (amount > itemPrice) {
    return true;
  } else {
    return false;
  }
}

console.log(changeEnough(14.11, [2, 100, 0, 0]));

//Ex6

function hotelCost() {
  do {
    numberOfNights = prompt("Please put number of nights");
  } while (isNaN(numberOfNights));
  return numberOfNights * 140;
}

function planeRideCost() {
  const prices = {
    london: 183,
    paris: 220,
  };
  do {
    destination = prompt("Whats your destination?");
    destination.toString();
  } while (!isNaN(destination));

  if (destination.toLowerCase() in prices) {
    return prices[destination];
  } else {
    return 300;
  }
}

function rentalCarCost() {}
