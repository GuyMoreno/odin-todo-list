// src/ui/todoUI.js
export function renderTodo(todos) {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");
    div.textContent = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;
    todoList.appendChild(div);
  });
}
