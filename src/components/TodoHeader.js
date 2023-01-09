import { createElement } from "./helper";

const TodoHeader = () => {
  const header = document.createElement("header");
  header.appendChild(createElement("h1", "Todos"));

  return header;
};

export default TodoHeader;
