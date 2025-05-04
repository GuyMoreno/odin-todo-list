import "./styles.css";
import Todo from "./todo";
import ProjectManager from "./projectManager";
import { displayTodos } from "./todoDom";
import { displayProjects, setupProjectModal } from "./projectDom";

// Create project manager and default project
const projectManager = new ProjectManager();
const inboxProject = projectManager.getProjectByName("Inbox");

// Make sure currentProject is exportable

export { projectManager };

// const todo1 = new Todo(
//   "Learn JavaScript",
//   "Study for 2 hours",
//   "2025-04-23",
//   "high"
// );
// inboxProject.addTodo(todo1);
// console.log(todo1.description); // Should log the todo1 object

// const todo2 = new Todo(
//   "Learn Python",
//   "Study for 4 hours",
//   "2025-04-23",
//   "high"
// );

// inboxProject.addTodo(todo2);
// console.log(todo2.description); // Should log the todo2 object

console.log("Project Manager:", projectManager);

displayTodos("Inbox");
displayProjects();
setupProjectModal();
console.log(projectManager.projects);
