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

    let deleteTaskIcon = document.createElement("img");

    deleteTaskIcon.setAttribute("src", "assets/delete.svg");
    deleteTaskIcon.setAttribute("id", "delete-button");
    let inputCheckbox = document.createElement("input");

    inputCheckbox.setAttribute("type", "checkbox");

    inputCheckbox.setAttribute("class", "do-checkbox");

    taskElement.textContent = inputField.value;

    taskElement.setAttribute("class", "task-item");

    tasksArr.push(taskElement.textContent);

    taskElement.prepend(inputCheckbox);

    taskElement.prepend(deleteTaskIcon);

    taskElement.style.display = "flex";

    taskElement.style.alignItems = "center";

    tasksList.append(taskElement);

    inputField.value = "";

    console.log(tasksArr);
  } else return;
}

document.addEventListener("change", doTask);

function doTask(event) {
  console.log(event.target.checked);
  if (event.target.checked == false) {
    event.path[1].style.textDecoration = "none";
  } else {
    console.log("UnChecked");
    console.log(event.path[1]);
    event.path[1].style.textDecoration = "line-through";
  }
}

function deleteTask() {}
