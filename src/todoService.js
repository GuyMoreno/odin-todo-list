import { projectManager } from "./index";

export function getTodoData(projectName) {
  const project = projectManager.getProjectByName(projectName);
  if (!project) {
    console.error(`❌ Project "${projectName}" not found.`);
    return [];
  }
  return project.todos; // Simply return the original todos
}
