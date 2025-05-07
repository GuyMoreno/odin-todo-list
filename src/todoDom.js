import Todo from "./todo";
import { getElementById, createTextElement } from "./utils";
import { getTodoData } from "./todoService";
import { projectManager } from "./index";

const todoDialog = getElementById("todo-dialog");
const todoButton = getElementById("todo-btn");
const closeTodoDialogButton = getElementById("close-todo-dialog-btn");
const todoForm = getElementById("todo-form");

todoButton.addEventListener("click", () => {
  todoDialog.showModal();
  populateProjectSelect();
  displayTodos(getElementById("project-select").value);
});

closeTodoDialogButton.addEventListener("click", () => todoDialog.close());

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo = new Todo(
    getElementById("todo-title").value.trim(),
    getElementById("todo-description").value.trim(),
    getElementById("dueDate").value,
    getElementById("priority").value,
    getElementById("notes").value.trim()
  );

  const projectName =
    document.querySelector(".project-li.active span")?.textContent || "Inbox";
  const targetProject = projectManager.getProjectByName(projectName);

  if (targetProject) {
    targetProject.addTodo(newTodo);
    todoDialog.close();
    todoForm.reset();
    displayTodos(projectName);
  } else {
    alert("Project not found!");
  }
});

export function displayTodos(projectName) {
  const todos = getTodoData(projectName);
  const container = getElementById("todos-sub-container");
  container.innerHTML = todos.length
    ? todos.map(createTodoCard).join("")
    : "No todos yet.";
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
  toggleIcon.textContent = "▶";

  const content = document.createElement("div");
  content.classList.add("todo-content");
  content.style.display = "none";
  content.append(
    ...["description", "dueDate", "priority", "notes"].map((key) =>
      createTextElement("p", todo[key] || `No ${key}`)
    )
  );

  header.addEventListener("click", () => {
    const isOpen = content.style.display === "block";
    content.style.display = isOpen ? "none" : "block";
    toggleIcon.textContent = isOpen ? "▶" : "▼";
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-todo-btn");
  deleteBtn.addEventListener("click", () => {
    deleteTodoFromProject(todo, getElementById("project-select").value);
    displayTodos(getElementById("project-select").value);
  });

  content.append(deleteBtn);
  header.append(title, toggleIcon);
  card.append(header, content);
  return card;
}

export function populateProjectSelect() {
  const select = getElementById("project-select");
  const currentSelection = select.value;

  select.innerHTML = projectManager.projects
    .map(
      (project) => `<option value="${project.name}">${project.name}</option>`
    )
    .join("");

  select.value = projectManager.projects.some(
    (p) => p.name === currentSelection
  )
    ? currentSelection
    : projectManager.projects.length
    ? projectManager.projects[projectManager.projects.length - 1].name
    : "Inbox";
}

function deleteTodoFromProject(todo, projectName) {
  const targetProject = projectManager.getProjectByName(projectName);
  if (targetProject) {
    const todoToDelete = targetProject._todos.find(
      (t) => t.title === todo.title
    );
    if (todoToDelete) {
      targetProject.removeTodo(todoToDelete);
    }
  }
}
