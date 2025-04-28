import Todo from "./todo";
import { currentProject } from "./index";
import { getElementById, createTextElement } from "./utils";

// Get DOM elements
const todoDialog = getElementById("todo-dialog");
const todoButton = getElementById("todo-btn");
const closeTodoDialogButton = getElementById("close-todo-dialog-btn");
const todoForm = getElementById("todo-form");

// Opens the form dialog and displays existing todos
todoButton.addEventListener("click", () => {
  todoDialog.showModal();
  displayTodos(); // always use currentProject.todos internally
});

closeTodoDialogButton.addEventListener("click", () => {
  todoDialog.close();
});

// Form submission
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = getElementById("todo-title").value.trim();
  const description = getElementById("todo-description").value.trim();
  const dueDate = getElementById("dueDate").value;
  const priority = getElementById("priority").value;
  const notes = getElementById("notes").value.trim();

  const newTodo = new Todo(title, description, dueDate, priority, notes);
  currentProject.addTodo(newTodo);

  todoDialog.close();
  todoForm.reset();
  displayTodos();
});

// Display all todos in the current project
export function displayTodos() {
  const todos = currentProject.todos;
  const container = getElementById("todos-container");
  container.innerHTML = "";

  if (todos.length === 0) {
    container.textContent = "No todos yet.";
    return;
  }

  todos.forEach((todo) => {
    const card = createTodoCard(todo);
    container.appendChild(card);
  });
}

function createTodoCard(todo) {
  const card = document.createElement("div");
  card.classList.add("todo-card");

  card.appendChild(createTextElement("h3", todo.title));
  card.appendChild(
    createTextElement("p", todo.description || "No description")
  );
  card.appendChild(createTextElement("p", `Due: ${todo.dueDate}`));
  card.appendChild(createTextElement("p", `Priority: ${todo.priority}`));
  card.appendChild(
    createTextElement("p", `Notes: ${todo.notes || "No notes"}`)
  );

  return card;
}
