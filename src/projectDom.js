import Todo from "./todo";
import { getElementById } from "./utils";

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

// Handle form submit
projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get values from form
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  // Close and reset form
  projectDialog.close();
  projectForm.reset();
});
