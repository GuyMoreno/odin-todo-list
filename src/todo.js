class Todo {
  constructor(title, description, dueDate, priority, notes = "") {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._notes = notes;
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
