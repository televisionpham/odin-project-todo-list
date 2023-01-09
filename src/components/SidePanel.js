import TodoPage from "./TodoPage";

const SidePanel = () => {
  const element = document.createElement("div");
  element.classList.add("side-panel");
  element.innerHTML = `<div class="logo"><i class="fa-solid fa-check-double"></i> Todo List</div>`;

  const panelLinks = document.createElement("div");
  panelLinks.classList.add("side-panel-links");
  element.appendChild(panelLinks);

  const ul = document.createElement("ul");
  panelLinks.appendChild(ul);

  const liTodos = document.createElement("li");
  ul.appendChild(liTodos);

  const todosLink = document.createElement("a");
  todosLink.classList.add("side-panel-link");
  todosLink.href = "#";
  todosLink.innerHTML = `<i class="fa-solid fa-check"></i> Todos`;
  todosLink.addEventListener("click", () => {
    const pagePanel = document.getElementById("pagePanel");
    pagePanel.innerHTML = "";
    pagePanel.appendChild(TodoPage());
  });
  liTodos.appendChild(todosLink);

  return element;
};

export default SidePanel;
