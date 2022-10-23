//Ex1
console.log("Work")

console.log(document.getElementById("container").innerHTML)

document.getElementById("change").innerHTML = "Richard"
document.querySelectorAll("ul > li:last-child").innerHTML = "Anton"

for (i = 0; i < document.querySelectorAll("ul > li:last-child").length; i++) {
  document.querySelectorAll("ul > li:last-child")[i].innerHTML = "Anton"
}

for (i = 0; i < document.querySelectorAll("ul > li").length; i++) {
  if (document.querySelectorAll("ul > li")[i].innerHTML === "Sarah") {
    document.querySelectorAll("ul > li")[i].remove()
  }
}

for (i = 0; i < document.querySelectorAll("ul").length; i++) {
  document.querySelectorAll("ul")[i].classList.add("class")
}
document.querySelector("ul").classList.add("university")
document.querySelector("ul").classList.add("attendance")
