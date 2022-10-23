let string = ""
let lastOperator
let input = document.getElementById("input")
function number(num) {
  string += num.toString()
  input.value = string
  console.log(string)
  if (string[0] === "0") {
    string = ""
    input.value = string
  }
}
function operator(operator) {
  string += operator.toString()
  input.value = string
  lastOperator = ""
  lastOperator = operator
  console.log(string)
  console.log(lastOperator)
}
function equal(equal) {
  input.value = string + "=" + eval(string)
}

function clear() {
  console.log("clear")
}

function reset() {
  string = ""
  input.value = ""
  console.log("reset")
}
