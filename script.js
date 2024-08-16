const todoList = document.querySelector(".todo-list");
const newTaskInput = document.getElementById("new-task");

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <div class="task-actions">
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
      </div>
    `;
    todoList.appendChild(newTask);
    newTaskInput.value = "";
  }
}

function editTask(button) {
  const task = button.parentElement.parentElement;
  const taskText = task.querySelector("span");
  const editText = prompt("Edit Task:", taskText.textContent);
  if (editText !== null) {
    taskText.textContent = editText;
  }
}

function deleteTask(button) {
  const task = button.parentElement.parentElement;
  task.remove();
}