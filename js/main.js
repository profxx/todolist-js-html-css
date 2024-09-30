const button = document.getElementById("addNova");
const newTask = document.getElementById("nova");
const tasks = document.getElementById("tasks");

let taskList = [];

function showList(){
    tasks.innerHTML = taskList.map(convertTaskToLi).join("");
}


function addNewTask() {
  taskList.push({
    name: newTask.value,
    concluded: false
  });
  showList();
  newTask.value = "";
}

function deleteItem(i) {
  taskList.splice(i, 1);
  showList();
}

function convertTaskToLi(task, i) {
  return `
            <li class="task ${task.concluded && "concluded"}">
                <img src="./assets/img/check.png" alt="check" onclick="taskConcluded(${i})">
                <p>${task.name}</p>
                <img src="./assets/img/trash.png" alt="trash" onclick="deleteItem(${i})">
            </li>`;
}

function taskConcluded(i) {
    taskList[i].concluded = !taskList[i].concluded;
    showList();
}

button.addEventListener("click", addNewTask);
newTask.addEventListener(
  "keypress",
  (event) => event.key == "Enter" && addNewTask()
);
