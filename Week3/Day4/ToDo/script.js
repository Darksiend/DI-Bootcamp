let form = document.querySelector("form");

form.addEventListener("submit", addTask);

let inputField = document.getElementById("input_field");

let tasksList = document.getElementById("tasks-list");

let tasksArr = [];

function addTask() {
  event.preventDefault();
  console.log();
  if (inputField.value != "") {
    let taskElement = document.createElement("div");

    let inputCheckbox = document.createElement("input");

    inputCheckbox.setAttribute("type", "checkbox");

    taskElement.textContent = inputField.value;

    taskElement.append(inputCheckbox);

    tasksArr.push(taskElement.textContent);

    tasksList.append(taskElement);

    console.log(tasksArr);
  } else return;
}
