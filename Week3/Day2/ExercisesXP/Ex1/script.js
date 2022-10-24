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

document.querySelector("h1").onmouseover = function () {
  let size = Math.round(Math.random() * 100)
  document.querySelector("h1").style.fontSize = `${size}px`
  document.querySelector("h1").style.opacity = "100%"
  document.querySelector("h1").style.transition = "opacity 5s;"
}

document.querySelector("h2").onmouseover = function () {
  document.querySelector("h2").style.opacity = "0"
}
