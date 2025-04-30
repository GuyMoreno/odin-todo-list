// projectModal.js

import { getElementById, createTextElement } from "./utils";
import { addNewProject } from "./projectService";
import ProjectManager from "./projectManager";
import { getProjectData } from "./projectService";

export function setupProjectModal() {
  const projectDialog = getElementById("project-dialog");
  const projectButton = getElementById("project-btn");
  const closeButton = getElementById("close-project-dialog-btn");
  const projectForm = getElementById("project-form");

  projectButton.addEventListener("click", () => {
    projectDialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    projectDialog.close();
  });

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = getElementById("project-title").value.trim();
    if (!title) return alert("Title required!");

    const newProject = addNewProject(title);
    displayProjects();
    console.log("✅ Project created:", newProject);

    projectDialog.close();
    projectForm.reset();
  });
}

export function displayProjects() {
  const projects = getProjectData();
  const container = getElementById("projects-container");
  container.innerHTML = "";

  if (projects.length === 0) {
    container.textContent = "No projects yet.";
    return;
  }

  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.appendChild(createTextElement("h3", project.name));

  return card;
}
