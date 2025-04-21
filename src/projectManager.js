class ProjectManager {
  constructor() {
    this._projects = []; // Array to store all projects
  }

  // Add a new project
  addProject(project) {
    this._projects.push(project);
  }

  // List all projects
  getAllProjects() {
    return this._projects;
  }
}
export default ProjectManager;
