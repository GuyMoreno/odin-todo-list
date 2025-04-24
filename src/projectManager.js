import { Project } from "./project";

class ProjectManager {
  constructor() {
    this._projects = []; // Array to store all projects
    this.currentProject = null;
    this.addProject(new Project("Inbox")); // Default project
  }

  // Add a new project

  addProject(project) {
    this._projects.push(project);
    if (!this.currentProject) {
      this.currentProject = project;
    }
  }

  setCurrentProject(projectName) {
    const found = this._projects.find((p) => p.name === projectName);
    if (found) {
      this.currentProject = found;
    }
  }

  getCurrentProject() {
    return this.currentProject;
  }

  getProjects() {
    return this._projects;
  }
}
export default ProjectManager;
