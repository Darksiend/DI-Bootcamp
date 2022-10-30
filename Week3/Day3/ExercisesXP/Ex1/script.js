//Ex1

function helloWord() {
  alert("Hello Word!");
}
function addPara() {
  let newPar = document.createElement("p");
  newPar.innerHTML = "Hello World";
  document.getElementById("container").append(newPar);
  console.log("<p> Added");
}

function runXTimes(x, interval, myFunction) {
  step = 0;
  function stepPlus() {
    if (step < x) {
      return (step += 1), myFunction();
    } else {
      return clearInterval(id);
    }
  }
  return (id = setInterval(stepPlus, interval));
}

function clickOnButton() {
  console.log("clicked");
  clearInterval(id);
}

runXTimes(5, 2000, addPara);

setTimeout(helloWord, 2000);
