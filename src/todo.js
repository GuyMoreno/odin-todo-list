import Priority from "./priority";

class Todo {
  constructor(title, description, dueDate, priority, notes = "") {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this.priority = new Priority(priority); // Use Priority class to ensure valid priority    this._notes = notes;
    this._isCompleted = false;
  }

  toggleComplete() {
    this._isCompleted = !this._isCompleted;
  }
  get title() {
    return this._title;
  }
}
export default Todo;
