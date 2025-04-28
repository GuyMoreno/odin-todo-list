// todoService.js
import { currentProject } from "./index";

export function getTodoData() {
  return currentProject.todos.map(todo => ({
    title: todo.title,
    description: todo.description,
    dueDate: todo.dueDate,
    priority: todo.priority,
    notes: todo.notes
  }));
}
