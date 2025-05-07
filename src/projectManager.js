import Project from "./project";

class ProjectManager {
  constructor() {
    this._projects = []; // Array to store ALL PROJECTS
    this.addProject(new Project("Inbox")); // Default project
  }

  // Add a new project with name uniqueness check
  addProject(project) {
    if (this._projects.some((p) => p.name === project.name)) {
      alert("Project with this name already exists");
      return; // Exit the method to prevent adding a duplicate
    }
    this._projects.push(project);
  }

  // Getter for all projects
  get projects() {
    return [...this._projects];
  }

  // Remove project by name
  removeProject(projectName) {
    this._projects = this._projects.filter((p) => p.name !== projectName);
  }

  // Get project by name
  getProjectByName(name) {
    return this._projects.find((project) => project.name === name) || null;
  }
}

const projectManager = new ProjectManager();
export default projectManager;
