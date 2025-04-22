import "./styles.css";
import Todo from "./todo";
import Project from "./project";
import ProjectManager from "./projectManager";

const projectManager = new ProjectManager();

const defaultProject = new Project("Inbox");

projectManager.addProject(defaultProject);

const todo = new Todo(
  "Example",
  "This is an example todo",
  "2025-04-23",
  "low"
);

// const todo2 = new Todo(
//   "UX design",
//   "Add footer to the page",
//   "2025-04-23",
//   "medium"
// );

// Add todo to project
defaultProject.addTodo(todo);
// workProject.addTodo(todo2);

// console.log(schoolProject);
// console.log(workProject);
console.log(defaultProject.todos);

// console.log(todo.priority);
