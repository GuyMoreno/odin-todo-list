// This module exports a function that creates an object representing a completion status.
// The object has a getter and setter for the completion status, and a method to toggle the status.

function createCompletionStatus(isCompleted = false) {
  let completed = Boolean(isCompleted);

  return {
    get isCompleted() {
      return completed;
    },
    set isCompleted(value) {
      completed = Boolean(value);
    },
    toggle() {
      completed = !completed;
    },
  };
}

export default createCompletionStatus;
