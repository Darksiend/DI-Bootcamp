//Daily
let form = document.getElementById("libform");
let allInputs = document.querySelectorAll("input");

form.addEventListener("submit", function () {
  event.preventDefault();
  console.log("Submit Event!");
  let isEmpty = false;
  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value == "") {
      isEmpty = true;
    }
  }
  if (!isEmpty) {
    let noun = document.getElementById("noun");
    let adjective = document.getElementById("adjective");
    let person = document.getElementById("person");
    let verb = document.getElementById("verb");
    let place = document.getElementById("place");
    let span = document.getElementById("story");
    span.innerHTML =
      noun.value +
      "..." +
      adjective.value +
      "..." +
      person.value +
      "..." +
      verb.value +
      "..." +
      place.value;
  } else {
    console.log("Empty Fields");
  }
});
