import Project from "./project";
import { projectManager } from "./index"; // Removed .js extension for cleaner import

// Adds a new project and returns it
export function addNewProject(name) {
  const newProject = new Project(name);
  projectManager.addProject(newProject); // Add project to the manager
  return newProject; // Return the new project
}

// Gets all projects managed by the project manager
export function getProjectData() {
  return projectManager.projects; // Return all projects
}
