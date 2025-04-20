import createCompletionStatus from "./completedStatus";
class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes = ""
    // checklist = []
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    // this.checklist = checklist;
    this.completed = createCompletedStatus();
  }

  toggleComplete() {
    this.completed.toggle();
  }
  get isCompleted() {
    return this.completed.isCompleted;
  }

  setCompleted(value) {
    this.completed.isCompleted = value;
  }
}

export default Todo;
