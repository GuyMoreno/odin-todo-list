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

