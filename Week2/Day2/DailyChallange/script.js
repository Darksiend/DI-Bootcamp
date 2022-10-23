//DailyChallenge

let sentense = "The movie is not that bad, I like it"

let wordNot = sentense.indexOf("not")
let wordBad = sentense.indexOf("bad") + 3

sentense =
  sentense.slice(0, wordNot) +
  "good" +
  sentense.slice(wordBad + 3, sentense.length)
console.log(sentense)
