import "./styles.css";

import Todo from "./todo";

import Project from "./project";

// Create a new project
const schoolProject = new Project("School");

// Tests
const todo = new Todo(
  "Do todo-list project",
  "for 4 hours",
  "2025-04-21",
  "high"
);

// Add todo to project
schoolProject.addTodo(todo);

console.log(schoolProject);

console.log(schoolProject.todos);
