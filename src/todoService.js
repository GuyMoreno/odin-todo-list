import { projectManager } from "./index";

export function getTodoData(projectName) {
  const project = projectManager.getProjectByName(projectName);

  if (!project) {
    console.error(`❌ Project "${projectName}" not found.`);
    return [];
  }

  return project.todos.map((todo) => ({
    title: todo.title,
    description: todo.description,
    dueDate: todo.dueDate,
    priority: todo.priority,
    notes: todo.notes,
  }));
}
