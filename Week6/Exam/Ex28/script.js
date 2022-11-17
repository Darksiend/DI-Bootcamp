function getRandomCat() {
  try {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((factObj) => addFactToDom(factObj));
  } catch (error) {
    console.log(error);
  }
}

function addFactToDom(obj) {
  let p = document.createElement("p");
  p.textContent = obj.fact;
  document.body.append(p);
}
