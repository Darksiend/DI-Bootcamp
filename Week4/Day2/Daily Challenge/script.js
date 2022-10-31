let client = "Betty";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

let displayGroceries = (groceries) => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

displayGroceries(groceries);

let cloneGroceries = () => {
  let user = client;
  console.log(user);
  let shopping = groceries;
  groceries.totalPrice = "35$";
  console.log(shopping);
  groceries.payed = false;
  console.log(shopping);
};

cloneGroceries();
