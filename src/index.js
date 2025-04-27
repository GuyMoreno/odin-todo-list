import "./styles.css";
import Todo from "./todo";
import ProjectManager from "./projectManager";
import { displayTodos } from "./todoDom";

const projectManager = new ProjectManager();

const TasksProject = projectManager.addProject("TasksProject");

projectManager.setCurrentProject("DefaultProject");

const defaultProject = projectManager.getCurrentProject();

// Create a new project
//

const todo = new Todo(
  "Start using the Tasks App",
  "ALOT",
  "2025-04-23",
  "high"
);

// Add todo to project
defaultProject.addTodo(todo);

const todo2 = new Todo("Drink Water", "ALOT", "2025-04-23", "low");
defaultProject.addTodo(todo2);

console.log(todo);
displayTodos(defaultProject.todos);
