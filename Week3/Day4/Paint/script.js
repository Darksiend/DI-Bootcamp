//Mini proj
let mouseDown = false;
let color = null;
let body = document.querySelector("body");
let colorSelector = document.querySelectorAll("#sidebar > *");
let clearBtn = document.querySelector("button");
let boxes = document.querySelectorAll("#main > *");

clearBtn.addEventListener("click", function () {
  console.log("ClearBtn Clicked");
  for (box of boxes) {
    box.style.backgroundColor = "white";
  }
});

body.addEventListener("mousedown", function () {
  mouseDown = true;
  console.log(`Mouse Down: ${mouseDown}`);
});

body.addEventListener("mouseup", function () {
  mouseDown = false;
  console.log(`Mouse Down: ${mouseDown}`);
});

for (colors of colorSelector) {
  colors.addEventListener("click", function (event) {
    color = event.target.style.backgroundColor;
    console.log(color);
  });
}

for (box of boxes) {
  box.addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = color;
  });
  box.addEventListener("mouseover", function (event) {
    if (mouseDown && color != null) {
      event.target.style.backgroundColor = color;
    }
  });
}
