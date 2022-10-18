//Ex1

let x = 5
let y = 2

if (x > y) {
  console.log(`${x} is the biggest number`)
} else {
  console.log(`${y} is the biggest number`)
}

//Ex2

let newDog = "Chihuahua"
console.log(`${newDog} have ${newDog.length} letters`)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog === "Chihuahua") {
  console.log("I love Chihuahuas, its my favorite dog breed")
} else {
  console.log("I dont care, I prefer cats")
}

//Ex3

let number = prompt("Put The Number")

if (number % 2 === 0) {
  console.log(`${number} is an even number`)
} else {
  console.log(`${number} is an odd number`)
}

//Ex4

const users = [
  "Lea123",
  "Princess45",
  "cat&doglovers",
  "helooo@000",
  "Darksiend",
]

if (users.length === 0) {
  console.log("no one is online")
} else if (users.length === 1) {
  console.log(`${users[0]} is online`)
} else if (users.length === 2) {
  console.log(`${users.slice(0, 2).join(",")} is online`)
} else if (users.length > 2) {
  console.log(
    `${users.slice(0, 2).join(",")} and ${users.length - 2} is online`
  )
}
