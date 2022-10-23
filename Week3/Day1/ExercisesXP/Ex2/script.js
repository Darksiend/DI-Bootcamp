//Ex2

document.querySelector("div").style.backgroundColor = "lightblue"
document.querySelector("div").style.padding = "15px"
for (i = 0; i < document.querySelectorAll("li").length; i++) {
  if (document.querySelectorAll("li")[i].innerHTML == "John") {
    document.querySelectorAll("li")[i].style.display = "none"
  }
  if (document.querySelectorAll("li")[i].innerHTML == "Pete") {
    document.querySelectorAll("li")[i].style.border = "1px solid black"
  }
}
document.body.style.fontSize = "45px"

//Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (document.querySelector("div").style.backgroundColor === "lightblue") {
  alert(
    `Hello ${document.querySelectorAll("li")[0].innerHTML} and ${
      document.querySelectorAll("li")[1].innerHTML
    }`
  )
}
