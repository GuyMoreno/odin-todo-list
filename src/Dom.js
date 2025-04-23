import Todo from "./todo";

const todoDialog = document.getElementById("todo-dialog");

const todoButton = document.getElementById("todo-btn");

todoButton.addEventListener("click", () => {
  todoDialog.showModal();
});
