//Ex1

console.log(5 >= 1)
//true
console.log(0 === 1)
//false
console.log(4 <= 1)
//false
console.log(1 != 1)
//false
console.log("A" > "B")
//false
console.log("B" < "C")
//true
console.log("a" > "A")
//true
console.log("b" < "A")
//false
console.log(true === false)
//false
console.log(true != true)
//false

//Ex2

// let numbers = prompt("Put numbers separeted by ,")
// console.log(numbers)

// function sum(numbers) {
//   let arr = []
//   arr = numbers.split(",")
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i])
//   }
//   console.log(sum)
// }
// sum(numbers)

//Ex3

// let sent = prompt("Put Something with Nemo")

// if (sent.includes("Nemo")) {
//   console.log(`Nemp Position is: ${sent.indexOf("Nemo")}`)
// } else {
//   console.log("I cant find Nemo")
// }

//Ex4

let num = 10
let str = "Boom"

let arr = str.split("")

if (num < 2) {
  str = str.toLowerCase
}
console.log(arr)
if (num > 2) {
  for (let i = 0; i < num - 2; i++) {
    arr.splice(1, 0, "o")
  }
  str = arr.join("")
}

if (num % 2 === 0) {
  arr.push("!")
  str = arr.join("")
}

if (num % 5 === 0) {
  str = str.toUpperCase()
}

if (num % 2 === 0 && num % 5 === 0) {
  str = str.toUpperCase() + "!"
}
console.log(str)

//Done
