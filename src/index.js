import "./styles.css";
import Todo from "./todo";
import Project from "./project";
import ProjectManager from "./projectManager";
import Dom from "./Dom";

const projectManager = new ProjectManager();

const defaultProject = new Project("Inbox");

projectManager.addProject(defaultProject);

const todo = new Todo(
  "Example",
  "This is an example todo",
  "2025-04-23",
  "low"
);

// Add todo to project
defaultProject.addTodo(todo);

console.log(defaultProject.todos);

// console.log(todo.priority);

// const dialog = createTodoDialog();
