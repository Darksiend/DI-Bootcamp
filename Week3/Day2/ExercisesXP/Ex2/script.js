//Ex2
const form = document.querySelector("form");
const firsNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const submitBtn = document.getElementById("submit");
let allInputs = document.querySelectorAll("input");

form.addEventListener("submit", function () {
  event.preventDefault();
  let allInputs = document.querySelectorAll("input");
  let firstName = firsNameInput.value;
  let lastName = lastNameInput.value;
  let emptyInputs = false;
  for (i = 0; i < allInputs.length - 1; i++) {
    if (!allInputs[i].value) {
      console.log("Field is blank", allInputs[i]);
      emptyInputs = true;
    }
  }
  if (emptyInputs == true) {
    console.log("inputs not filled");
  } else {
    let firstNameLiTag = document.createElement("li");
    let lastNameLiTag = document.createElement("li");
    ulTag = document.querySelector("ul");
    firstNameLiTag.innerHTML = firstName;
    lastNameLiTag.innerHTML = lastName;
    document.querySelector("ul").append(firstNameLiTag);
    document.querySelector("ul").append(lastNameLiTag);
    ulTag.append(firstNameLiTag);
  }
});
