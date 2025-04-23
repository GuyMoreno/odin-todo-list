import Todo from "./todo";

const projectDialog = document.getElementById("project-dialog");
const projectButton = document.getElementById("project-btn");
const closeDialogbutton = document.getElementById("close-dialog-btn");
const projectForm = document.getElementById("project-form");

projectButton.addEventListener("click", () => {
  projectDialog.showModal();
});

closeDialogbutton.addEventListener("click", () => {
  projectDialog.close();
});

// Handle form submit
projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get values from form
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  // Create new Todo
  const newTodo = new Todo(title, description, dueDate, priority, notes);

  console.log("✅ New Todo created:", newTodo); // debug

  // Close and reset form
  projectDialog.close();
  projectForm.reset();
});
