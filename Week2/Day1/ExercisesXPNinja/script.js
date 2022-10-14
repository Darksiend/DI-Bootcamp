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

let numbers = prompt("Put numbers separeted by ,")
console.log(numbers)

function sum(numbers) {
  let arr = []
  arr = numbers.split(",")
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i])
  }
  console.log(sum)
}
sum(numbers)
