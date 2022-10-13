// Ex1
let favFood = "Burger"
let favMeal = "Dinner"

console.log(`I eat ${favFood} at every ${favMeal}`)

//Ex2

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]

let myWatchedSeriesLength = myWatchedSeries.length

let myWatchedSeriesSentence = myWatchedSeries[0] + myWatchedSeries[2]

console.log(
  `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}.`
)

//Ex3

let tempCel = 36.6
console.log(`${tempCel}°C is ${(tempCel / 5) * 9 + 32}`)

//Ex4

let c
let a = 34
let b = 21

console.log(a + b) //first expression
// Prediction: a = 34 and b = 21 so it will be 55
// Actual: 55

a = 2

console.log(a + b) //second expression
// Prediction: a = 2 b = 21 it will be 23
// Actual:23
// Value of c is undefind

console.log(3 + 4 + "5")
// Here iutcome will be string 75
