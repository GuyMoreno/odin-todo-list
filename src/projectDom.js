import { getElementById } from "./utils";
import { addNewProject } from "./projectService";

const projectDialog = getElementById("project-dialog");
const projectButton = getElementById("project-btn");
const closeProjectDialogbutton = getElementById("close-project-dialog-btn");
const projectForm = getElementById("project-form");

projectButton.addEventListener("click", () => {
  projectDialog.showModal();
});

closeProjectDialogbutton.addEventListener("click", () => {
  projectDialog.close();
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("project-title").value.trim();

  const newProject = addNewProject(title); // ✅ Now the project is created

  console.log("✅ New project created:", newProject); // Debug line

  projectDialog.close();
  projectForm.reset();
});
