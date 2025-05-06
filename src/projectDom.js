// projectModal.js

import { getElementById, createTextElement } from "./utils";
import { addNewProject } from "./projectService";

import projectManager from "./projectManager";

import { getProjectData } from "./projectService";

import { displayTodos } from "./todoDom";

export function setupProjectModal() {
  const projectDialog = getElementById("project-dialog");
  const projectButton = getElementById("project-btn");
  const closeButton = getElementById("close-project-dialog-btn");
  const projectForm = getElementById("project-form");

  // projectButton.addEventListener("click", () => {
  //   projectDialog.showModal();
  // });

  // closeButton.addEventListener("click", () => {
  //   projectDialog.close();
  // });

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = getElementById("project-title").value.trim();
    if (!title) return alert("Title required!");

    const newProject = addNewProject(title);
    displayProjects();
    getElementById("project-title").value = ""; // Clear the input field
    console.log("✅ Project created:", newProject);

    // projectDialog.close();
    // projectForm.reset();
  });
}

export function displayProjects() {
  const projects = getProjectData();
  const projectsContainer = getElementById("projects-container");
  projectsContainer.innerHTML = "";

  if (projects.length === 0) {
    projectsContainer.textContent = "No projects yet.";
    return;
  }

  projects.forEach((project) => {
    const projectLi = createProjectLi(project);
    projectsContainer.appendChild(projectLi);
  });
}

function createProjectLi(project) {
  const projectLi = document.createElement("li");
  projectLi.classList.add("project-li");

  const projectName = createTextElement("span", project.name);
  projectLi.appendChild(projectName);

  // 🗑️ Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-project-btn", "hidden-delete");
  projectLi.appendChild(deleteBtn);

  // 📌 Highlight project on click
  projectLi.addEventListener("click", () => {
    document
      .querySelectorAll(".project-li")
      .forEach((el) => el.classList.remove("active"));
    projectLi.classList.add("active");
    displayTodos(project.name);
  });

  // 🧹 Delete on click
  deleteBtn.addEventListener("click", () => {
    projectManager.removeProject(project.name); // משתמש ב-ProjectManager
    displayProjects(); // מרענן את הרשימה
  });

  return projectLi;
}
