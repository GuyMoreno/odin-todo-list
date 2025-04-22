import "./styles.css";
import Todo from "./todo";
import Project from "./project";
import ProjectManager from "./projectManager";

const projectManager = new ProjectManager();

// Create a new project
const schoolProject = new Project("School");

const workProject = new Project("Work");

const defaultProject = new Project("Inbox");

projectManager.addProject(schoolProject);
projectManager.addProject(workProject);
projectManager.addProject(defaultProject);
// Tests
const todo = new Todo(
  "Do todo-list project",
  "Complete the todo list project",
  "2025-04-23",
  "high"
);

const todo2 = new Todo(
  "UX design",
  "Add footer to the page",
  "2025-04-23",
  "medium"
);

// Add todo to project
schoolProject.addTodo(todo);
workProject.addTodo(todo2);

// console.log(schoolProject);
// console.log(workProject);
console.log(projectManager);

// console.log(todo.priority);
