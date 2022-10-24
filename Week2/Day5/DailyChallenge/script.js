//Daily Challenge

// We start the song at 99 bottles
//99 bottles of beer on the wall
//99 bottles of beer
// -> Take _1_ down, pass it around
// -> we have now 98 bottles

// -> then, Take _2_ down, pass them around
// -> we have now 96 bottles

// -> then, Take _3_ down, pass them around
// -> we have now 93 bottles

// ... ect

function song(bottles) {
  let word
  let counter = 0
  let endBottlesNumber = bottles
  for (let i = 0; i < bottles; i++) {
    if (endBottlesNumber > 0) {
      endBottlesNumber -= i
      counter++
    }
  }

  counter -= 1
  for (let i = 1; i < counter; i++) {
    if (i == 1) {
      word = "it"
    } else {
      word = "them"
    }
    console.log(`${bottles} bottles of beer on the wall`)
    console.log(`${bottles} bottles of beer`)
    console.log(`Take ${i} down, pass ${word} around`)
    bottles = bottles - i
    console.log(`we have now ${bottles} bottles`)
    if (i == counter - 1) {
      console.log(`${bottles} bottles of beer on the wall`)
      console.log(`${bottles} bottles of beer`)
      console.log(`Take ${bottles} down, pass ${word} around`)
      console.log(`0 bottle of beer on the wall`)
    }
  }
}

let userNumber = prompt("Put a Number!")
song(userNumber)
