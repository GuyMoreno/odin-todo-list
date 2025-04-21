class Priority {
  constructor(level) {
    const validPriorities = ["Low", "Medium", "High"];
    if (validPriorities.includes(level)) {
      this.level = level;
    } else {
      throw new Error("Invalid priority");
    }
  }
}

export default Priority;
