class Project {
  constructor(name) {
    this.name = name; // Name of the project (e.g., "Work", "Home")
    this._todos = []; // Array to hold todos associated with the project
  }

  // Add a todo to this project
  addTodo(todo) {
    this._todos.push(todo);
  }

  // Getter to access todos
  get todos() {
    return this._todos;
  }
}
export default Project;
