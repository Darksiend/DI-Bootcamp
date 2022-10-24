//Ex4
let form = document.getElementById("MyForm");
let radiusField = document.getElementById("radius");
let volumeOutput = document.getElementById("volume");
let submitButton = document.getElementById("submit");
function volume() {}

form.addEventListener("submit", function () {
  event.preventDefault();
  volumeOutput.value = volume(radiusField.value);
});

function volume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}
