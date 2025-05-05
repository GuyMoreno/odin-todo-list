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
  const container = getElementById("todos-sub-container");

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

  const header = document.createElement("div");
  header.classList.add("todo-header");

  const title = document.createElement("h3");
  title.textContent = todo.title;

  const toggleIcon = document.createElement("span");
  toggleIcon.classList.add("toggle-icon");
  toggleIcon.textContent = "▶"; // חץ סגור בהתחלה

  // תוכן שמתרחב
  const content = document.createElement("div");
  content.classList.add("todo-content");
  content.style.display = "none";

  content.appendChild(
    createTextElement("p", todo.description || "No description")
  );
  content.appendChild(createTextElement("p", `Due: ${todo.dueDate}`));
  content.appendChild(createTextElement("p", `Priority: ${todo.priority}`));
  content.appendChild(
    createTextElement("p", `Notes: ${todo.notes || "No notes"}`)
  );

  // לחיצה על האייקון תפתח/תסגור את התוכן
  toggleIcon.addEventListener("click", () => {
    const isOpen = content.style.display === "block";
    content.style.display = isOpen ? "none" : "block";
    toggleIcon.textContent = isOpen ? "▶" : "▼";
  });

  header.appendChild(title);
  header.appendChild(toggleIcon);
  card.appendChild(header);
  card.appendChild(content);

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
