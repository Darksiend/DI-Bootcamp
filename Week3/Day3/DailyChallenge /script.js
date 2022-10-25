//Daily Challenge
const input = document.getElementById("input_field");
console.log(input);
input.addEventListener("keydown", function () {
  console.log(event.key);
  if (event.key.match(/[0-9]/)) return event.preventDefault();
});
