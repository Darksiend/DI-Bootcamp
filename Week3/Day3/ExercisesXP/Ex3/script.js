//Ex3
let box = document.getElementById("box");
box.onmousedown = function (event) {
  box.style.position = "absolute";
  box.style.zIndex = 1000;
  document.body.append(box);
  moveAt(event.pageX, event.pageY);
  function moveAt(pageX, pageY) {
    box.style.left = pageX - box.offsetWidth / 2 + "px";
    box.style.top = pageY - box.offsetHeight / 2 + "px";
  }
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener("mousemove", onMouseMove);
  box.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    box.onmouseup = null;
  };
};
