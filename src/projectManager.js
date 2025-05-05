import Project from "./project";

class ProjectManager {
  constructor() {
    this._projects = []; // Array to store ALL PROJECTS
    this.addProject(new Project("Inbox")); // Default project
  }
  // Add a new project
  addProject(project) {
    this._projects.push(project);
  }

  // Getter for all projects
  get projects() {
    return [...this._projects];
  }
  removeProject(projectName) {
    this._projects = this._projects.filter((p) => p.name !== projectName);
  }

  getProjectByName(name) {
    for (let project of this._projects) {
      if (project.name === name) {
        return project; // Return the project if the name matches
      }
    }
    return null; 
  }
}
const projectManager = new ProjectManager();
export default projectManager;
