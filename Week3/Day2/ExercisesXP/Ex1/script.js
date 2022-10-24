//Ex1

console.log(document.querySelector("h1"))
document.querySelector("article").lastElementChild.remove()
document.getElementById("color").onclick = function () {
  document.querySelector("h2").style.backgroundColor = "red"
}

document.getElementById("display").onclick = function () {
  document.querySelector("h3").style.display = "none"
}

document.getElementById("bold").onclick = function () {
  for (i = 0; i < document.querySelectorAll("p").length; i++) {
    document.querySelectorAll("p")[i].style.fontWeight = "bold"
  }
}
