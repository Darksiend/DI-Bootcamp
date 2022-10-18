//Ex1

var lang = prompt("Which Language you speak?")
lang = lang.toLowerCase()

console.log(lang)
switch (lang) {
  case "french":
    console.log("Bonjour")
    break
  case "english":
    console.log("Hello")
    break
  case "hebrew":
    console.log("Shalom")
    break
  default:
    console.log("01110011 01101111 01110010 01110010 01111001")
    break
}
