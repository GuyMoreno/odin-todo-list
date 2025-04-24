import "./styles.css";
import Todo from "./todo";
import { Project } from "./project";
import ProjectManager from "./projectManager";
import { displayTodos } from "./todoDom";

import ProjectDom from "./projectDom";

const projectManager = new ProjectManager();

const defaultProject = projectManager.getProjectByName("Inbox");

const todo = new Todo(
  "Example",
  "This is an example todo",
  "2025-04-23",
  "high"
);

// Add todo to project
defaultProject.addTodo(todo);

console.log(todo);
displayTodos(defaultProject.todos);
// console.log(todo.priority);

// const dialog = createTodoDialog();
