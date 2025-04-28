class Project {
  constructor(name) {
    this.name = name; // Name of the project (e.g., "Work", "Home")
    this._todos = []; // Array to hold todos associated with the project
  }

  // Add a todo to this project
  addTodo(todo) {
    this._todos.push(todo);
  }

  // Remove the specified todo
  removeTodo(todoToRemove) {
    this._todos = this._todos.filter((todo) => todo !== todoToRemove); // filter out the todo to remove and return the rest
  }

  // Getter to access todos
  get todos() {
    return [...this._todos]; // Return a copy of the todos array
  }

  findTodo(title) {
    for (let todo of this._todos) {
      if (todo.title === title) {
        return todo; // Return the todo if the title matches
      }
    }
    return null; // Return null if no todo with that title is found
  }
}
export { Project };
