import Todo from "./todo";

import { getElementById } from "./utils";
import { createTodoCard } from "./todoCardDom";

const todoDialog = getElementById("todo-dialog");
const todoButton = getElementById("todo-btn");
const closeTodoDialogbutton = getElementById("close-todo-dialog-btn");
const todoForm = getElementById("todo-form");

todoButton.addEventListener("click", () => {
  todoDialog.showModal();
});

closeTodoDialogbutton.addEventListener("click", () => {
  todoDialog.close();
});

// Handle form submit
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  displayTodos();
  // Get values from form
  const title = getElementById("todo-title").value.trim();
  const description = getElementById("todo-description").value.trim();

  const dueDate = getElementById("dueDate").value;
  const priority = getElementById("priority").value;
  const notes = getElementById("notes").value.trim();

  // Create new Todo
  const newTodo = new Todo(title, description, dueDate, priority, notes);

  console.log("✅ New Todo created:", newTodo); // debug

  // Close and reset form
  todoDialog.close();
  todoForm.reset();
});

export function displayTodos(todos) {
  if (!todos || todos.length === 0) {
    console.log("No todos to display.");
    return;
  }

  const todosContainer = getElementById("todos-container");

  // Clear the container before displaying new todos
  todosContainer.innerHTML = "";

  // Create and append todo cards
  todos.forEach((todo) => {
    const todoCard = createTodoCard(todo);
    todosContainer.appendChild(todoCard);
  });
}
