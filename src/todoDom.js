import Todo from "./todo";
import { getElementById, createTextElement } from "./utils";
import { getTodoData } from "./todoService";
import { projectManager } from "./index";

// Get DOM elements
const todoDialog = getElementById("todo-dialog");
const todoButton = getElementById("todo-btn");
const closeTodoDialogButton = getElementById("close-todo-dialog-btn");
const todoForm = getElementById("todo-form");

// Opens the form dialog and displays existing todos
todoButton.addEventListener("click", () => {
  todoDialog.showModal();
  populateProjectSelect();

  const selectedProject = getElementById("project-select").value;
  displayTodos(selectedProject);
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
  const projectName = getElementById("project-select").value;

  const newTodo = new Todo(title, description, dueDate, priority, notes);

  const targetProject = projectManager.getProjectByName(projectName);
  if (!targetProject) return alert("Project not found!");

  targetProject.addTodo(newTodo);
  console.log("📝 Todo added to:", projectName, newTodo);

  todoDialog.close();
  todoForm.reset();
  displayTodos(projectName); // Pass the projectName directly here
});

// Display all todos in the selected project
export function displayTodos(projectName) {
  const todos = getTodoData(projectName);
  const container = getElementById("todos-container");

  container.innerHTML = "";

  if (todos.length === 0) {
    container.textContent = "No todos yet.";
    return;
  }

  // לא מנקים את ה-container, רק מוסיפים את המשימות החדשות
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

// Populates the project selection dropdown
export function populateProjectSelect() {
  const select = getElementById("project-select");
  select.innerHTML = ""; // Clear old options

  const projects = projectManager.projects;

  projects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.name;
    option.textContent = project.name;
    select.appendChild(option);
  });

  // Select the last project or "Inbox" if no projects
  if (projects.length > 0) {
    select.value = projects[projects.length - 1].name;
  } else {
    select.value = "Inbox";
  }
}
