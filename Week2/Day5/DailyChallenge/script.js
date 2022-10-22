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

let bottles = 99
let word

for (i = 1; i < 14; i++) {
  i == 1 ? (word = "it") : (word = "them")
  console.log(`${bottles} bottles of beer on the wall`)
  console.log(`${bottles} bottles of beer`)
  console.log(`Take ${i} down, pass ${word} around`)
  bottles = bottles - i
  console.log(`we have now ${bottles} bottles`)
  if (i == 13) {
    console.log(`${bottles} bottles of beer on the wall`)
    console.log(`${bottles} bottles of beer`)
    console.log(`Take 8 down, pass ${word} around`)
    console.log(`0 bottle of beer on the wall`)
  }
}
