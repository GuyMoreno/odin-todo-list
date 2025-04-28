import "./styles.css";
import Todo from "./todo";
import ProjectManager from "./projectManager";
import { displayTodos } from "./todoDom";

// Create project manager and default project
const projectManager = new ProjectManager();
const inboxProject = projectManager.getProjectByName("Inbox");

// Make sure currentProject is exportable
export const currentProject = inboxProject;

const todo1 = new Todo(
  "Learn JavaScript",
  "Study for 2 hours",
  "2025-04-23",
  "high"
);
inboxProject.addTodo(todo1);
console.log(todo1.description); // Should log the todo1 object
displayTodos();
