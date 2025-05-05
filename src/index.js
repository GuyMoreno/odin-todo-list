import "./styles.css";
import Todo from "./todo";
import projectManager from "./projectManager"; // 👈 עם אות קטנה כי זו לא מחלקה אלא מופע
import { displayTodos } from "./todoDom";
import { displayProjects, setupProjectModal } from "./projectDom";

const inboxProject = projectManager.getProjectByName("Inbox");

export { projectManager };

console.log("Project Manager:", projectManager);

displayTodos("Inbox");
displayProjects();
setupProjectModal();
console.log(projectManager.projects);
