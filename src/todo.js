import Priority from "./priority";

class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority = Priority.MEDIUM, //// Default to 'medium' priority if not specified
    notes = ""
  ) {
    this._validatePriority(priority);
    this.id = Date.now();
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._notes = notes;
    this._isCompleted = false;

  }

  // Private validator
  _validatePriority(priority) {
    if (!Priority.isValid(priority)) {
      throw new Error("Invalid priority level");
    }
  }

  // Priority setter with validation
  set priority(newPriority) {
    this._validatePriority(newPriority);
    this._priority = newPriority;
  }
  set title(newTitle) {
    this._title = newTitle;
  }
  set description(newDesc) {
    this._description = newDesc;
  }
  set dueDate(newDate) {
    this._dueDate = newDate;
  }
  set notes(newNotes) {
    this._notes = newNotes;
  }

  toggleComplete() {
    this._isCompleted = !this._isCompleted;
  }
  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get dueDate() {
    return this._dueDate;
  }
  get priority() {
    return this._priority;
  }
  get notes() {
    return this._notes;
  }
  get isCompleted() {
    return this._isCompleted;
  }
}
export default Todo;
