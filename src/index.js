import "./styles.css";

import Todo from "./todo";

import Project from "./project";

import ProjectManager from "./projectManager";

const projectManager = new ProjectManager();

// Create a new project
const schoolProject = new Project("School");

projectManager.addProject(schoolProject);

// Tests
const todo = new Todo(
  "Do todo-list project",
  "for 4 hours",
  "2025-04-21",
  "High"
);

// Add todo to project
schoolProject.addTodo(todo);

console.log(schoolProject);

console.log(todo.priority.level);
