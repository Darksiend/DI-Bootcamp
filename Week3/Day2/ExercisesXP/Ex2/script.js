//Ex2
const form = document.querySelector("form")
const firsNameInput = document.getElementById("fname")
const lastNameInput = document.getElementById("lname")
const submitBtn = document.getElementById("submit")
console.log(firsNameInput)
console.log(lastNameInput)
console.log(submitBtn)
console.log(form)

console.log(document.getElementsByName("fname"))
console.log(document.getElementsByName("lname"))

form.addEventListener("submit", function () {
  event.preventDefault()
  console.log("form: ", form)
  console.log("first name: ", firsNameInput.value)
  console.log("last name: ", lastNameInput.value)
})
