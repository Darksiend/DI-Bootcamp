//Ex5
// function makeJuice(size) {
//
//   function addIngredients(first, second, third) {
//     sentence = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
//     document.body.textContent = sentence;
//   }
//   addIngredients("apple", "orange", "banana");
// }
// makeJuice("XL");

function makeJuice(size) {
  const ingredients = [];
  function addIngredients(first, second, third) {
    ingredients.push(first, second, third);
    console.log(ingredients);
  }
  addIngredients("banana", "apple", "orange");
  addIngredients("grape", "mango", "strawberry");
  function displayJuice() {
    let ingr = "";
    ingredients.forEach((el) => {
      ingr += " " + el + ",";
    });
    console.log(ingr);
    sentence = `The client wants a ${size} juice, containing ${ingr}`;
    document.body.textContent = sentence;
  }
  displayJuice();
}

makeJuice("XL");
