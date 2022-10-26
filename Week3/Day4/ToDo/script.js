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
    let taskObj = {
      taskName: inputField.value,
      done: false,
      taskId: tasksArr.length + 1,
    };

    let inputCheckbox = document.createElement("input");
    let deleteTaskIcon = document.createElement("img");
    deleteTaskIcon.setAttribute("src", "assets/delete.svg");

    deleteTaskIcon.setAttribute("id", "delete-button");

    deleteTaskIcon.addEventListener("click", deleteTask);

    inputCheckbox.setAttribute("type", "checkbox");

    inputCheckbox.setAttribute("class", "do-checkbox");

    taskElement.textContent = inputField.value;

    taskElement.setAttribute("class", "task-item");
    taskElement.setAttribute("data-task-id", taskObj.taskId);

    tasksArr.push(taskObj);

    taskElement.prepend(inputCheckbox);

    taskElement.prepend(deleteTaskIcon);

    taskElement.style.display = "flex";

    taskElement.style.alignItems = "center";

    tasksList.append(taskElement);

    taskObj = { taskName: "1", done: false, taskId: 0 };

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

function deleteTask(event) {
  for (task of tasksArr) {
    if (event.path[1].getAttribute("data-task-id") == task.taskId) {
      tasksArr.splice(tasksArr.indexOf(task), 1);
      console.log("Deleted from", tasksArr);
    }
  }
  console.log();
  event.path[1].remove();
}

inputField.addEventListener("input", function () {
  if (inputField.value[0] != inputField.value[0].toUpperCase()) {
    (inputField.value = inputField.value.slice(0, 1).toUpperCase()) +
      inputField.value.slice(1, inputField.value.length);
  }
});
