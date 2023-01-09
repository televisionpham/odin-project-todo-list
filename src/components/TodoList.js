import myStore from "../store/myStore";
import { createElement } from "./helper";
import Todo from "./Todo";

const TodoList = () => {
  const todosElement = document.createElement("table");
  todosElement.id = "todos";

  const trHeader = document.createElement("tr");
  trHeader.appendChild(document.createElement("th"));
  trHeader.appendChild(createElement("th", "Title"));
  trHeader.appendChild(createElement("th", "Description"));
  trHeader.appendChild(createElement("th", "Due Date"));
  trHeader.appendChild(createElement("th", "Priority"));
  trHeader.appendChild(createElement("th", "Actions"));

  todosElement.appendChild(trHeader);

  const render = () => {
    const items = document.querySelectorAll(".todo-item");
    for (const item of items) {
      item.remove();
    }
    const todos = myStore.getState().todos;
    for (let i = 0; i < todos.length; i++) {
      const todoElement = Todo(todos[i]);
      todosElement.appendChild(todoElement);
    }
  };

  const element = {
    Element: todosElement,
    render,
  };

  myStore.subscribe(element);

  return element;
};

export default TodoList;
