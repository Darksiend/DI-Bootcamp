fetch("http://localhost:3000/")
  .then((res) => res.json())
  .then((res) => addToDom(res));
console.log("Work");
function addToDom(jsonRes) {
  let resDiv = document.createElement("div");
  resDiv.textContent = JSON.parse(jsonRes);
  document.body.append(resDiv);
}
addToDom(jsonRes);
