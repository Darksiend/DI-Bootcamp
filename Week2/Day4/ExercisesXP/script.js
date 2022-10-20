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

calculateTip();
