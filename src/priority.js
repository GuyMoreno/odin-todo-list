class Priority {
  static LOW = "low";
  static MEDIUM = "medium";
  static HIGH = "high";

  static ALLOWED_VALUES = [Priority.LOW, Priority.MEDIUM, Priority.HIGH];
  // A function / method to validate the priority value
  static isValid(value) {
    // build an array of the defined priorities

    // returns true if the value is one of the defined priorities
    return Priority.ALLOWED_VALUES.includes(value);
  }
}

export default Priority;
