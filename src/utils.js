// utils.js
export function getElementById(id) {
  return document.getElementById(id);
}

// Function to create a text element
export function createTextElement(tag, textContent) {
  const element = document.createElement(tag);
  element.textContent = textContent;
  return element;
}

export function createTodoCard(todo) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");

  todoCard.appendChild(createTextElement("h3", todo.title));

  todoCard.appendChild(
    createTextElement("p", todo.description || "No description available")
  );

  todoCard.appendChild(createTextElement("p", `Due: ${todo.dueDate}`));

  todoCard.appendChild(createTextElement("p", `Priority: ${todo.priority}`));

  todoCard.appendChild(
    createTextElement("p", `Notes: ${todo.notes || "No notes"}`)
  );

  return todoCard;
}
