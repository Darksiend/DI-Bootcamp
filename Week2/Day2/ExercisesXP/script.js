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
