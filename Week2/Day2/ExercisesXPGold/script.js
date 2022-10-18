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

//Ex2

let num = prompt("Your grade is: ")

if (num > 90) {
  console.log("A")
} else if (num <= 90 && num > 80) {
  console.log("B")
} else if (num >= 70 && num <= 80) {
  console.log("C")
} else if (num < 70) {
  console.log("D")
}

//Ex3
let verb = prompt("Put a verb")

if (verb.length <= 2) {
  console.log(verb)
} else if (verb.length >= 3 && !verb.endsWith("ing")) {
  verb = verb + "ing"
  console.log(verb)
}
