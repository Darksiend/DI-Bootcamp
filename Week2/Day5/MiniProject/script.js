//Mini Project

function playTheGame() {
  if (confirm("You wont play?")) {
    let number = prompt("Enter a number:")
    if (isNaN(number)) {
      while (isNaN(number)) {
        number = prompt("Its need to be a number!")
      }
    } else if (number < 0 && number > 10) {
      alert("Sorry its not a good number, Goodbye")
    } else {
      let computerNumber = Math.floor(Math.random() * 11)
      console.log(`Computer number is: ${computerNumber}`)
      compareNumbers(number, computerNumber)
    }
  } else {
    alert("No problem, Goodbye")
  }
}

function compareNumbers(userNumber, computerNumber) {
  let i = 0
  while (userNumber !== computerNumber && i < 2) {
    if (userNumber > computerNumber) {
      userNumber = prompt(
        "Your number is bigger then the computers, guess again"
      )
      i++
      console.log(`New User Number: ${userNumber}`)
    } else if (userNumber < computerNumber) {
      userNumber = prompt(
        "You number is smaller then the computer, guess again"
      )
      i++
      console.log(`New User Number: ${userNumber}`)
    }
    if (userNumber == computerNumber) {
      alert("Winner!")
      break
    }
  }
}
