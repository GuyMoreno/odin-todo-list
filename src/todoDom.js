import Todo from "./todo";
import ProjectManager from "./projectManager";

import { getElementById, createTextElement } from "./utils";

// Get elements from the DOM
const todoDialog = getElementById("todo-dialog");
const todoButton = getElementById("todo-btn");
const closeTodoDialogbutton = getElementById("close-todo-dialog-btn");
const todoForm = getElementById("todo-form");

// Function to create a dialog for adding a new todo
export function createTodoCard(todo) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");

  todoCard.appendChild(createTextElement("h3", todo.title));

  todoCard.appendChild(
    createTextElement("p", todo.description || "No description available")
  );

  todoCard.appendChild(createTextElement("p", `Due: ${todo.dueDate}`));

  todoCard.appendChild(createTextElement("p", `Priority: ${todo.priority}`));

  todoCard.appendChild(
    createTextElement("p", `Notes: ${todo.notes || "No notes"}`)
  );

  return todoCard;
}

todoButton.addEventListener("click", () => {
  todoDialog.showModal();
  displayTodos(currentProject.todos);
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

  // Create new Todo from form values
  const newTodo = new Todo(title, description, dueDate, priority, notes);
  console.log("✅ New Todo created:", newTodo); // debug

  // Close and reset form
  todoDialog.close();
  todoForm.reset();
  displayTodos(newTodo);
});

export function displayTodos(todos) {
  if (!todos || todos.length === 0) {
    console.log("No todos to display.");
    return;
  }

  const todosContainer = getElementById("todos-container");

  // Clear the container before displaying new todos
  // todosContainer.innerHTML = "";

  // Create and append todo cards
  todos.forEach((todo) => {
    const todoCard = createTodoCard(todo);
    todosContainer.appendChild(todoCard);
  });
}
