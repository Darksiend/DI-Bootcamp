//Ex2
let marginLeft = 0;
let counter = 0;
//let object =
//let container = document.getElementById("container");
function animate() {
  let pixels = 1;
  counter += 1;
  if (counter <= 350) {
    marginLeft += pixels;
    document.getElementById("animate").style.marginLeft = `${marginLeft}px`;
    console.log(`${marginLeft}px`);
  } else {
    clearInterval(id);
  }
}

id = setInterval(animate, 10);
