//Ex 3

document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const newContent = document.createTextNode("Logout");
newLi.append(newContent);
document.querySelector("ul").appendChild(newLi);
console.log(document.querySelector("ul").firstElementChild.textContent);
console.log(document.querySelector("ul").lastElementChild.textContent);
