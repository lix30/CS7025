
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = ""; 
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.onclick = () => {
      removeTask(index);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}


function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = ""; 
  } else {
    console.error("Task content cannot be empty！");
  }
}


function removeTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}


function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


addTaskButton.addEventListener("click", addTask);


document.addEventListener("DOMContentLoaded", renderTasks);
