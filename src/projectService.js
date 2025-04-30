import Project from "./project";
import { projectManager } from "./index.js";

export function addNewProject(name) {
  const newProject = new Project(name);
  projectManager.addProject(newProject);
  return newProject;
}

export function getProjectData() {
  return projectManager.projects;
}
