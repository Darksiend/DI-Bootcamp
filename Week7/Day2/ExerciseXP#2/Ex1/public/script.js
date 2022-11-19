let jsonRes = fetch("http://localhost:3000/").then((res) => res.json());
console.log("Work");
function addToDom(jsonRes) {
  let resDiv = document.createElement("div");
  resDiv.textContent = jsonRes;
  document.body.append(resDiv);
}
