import Todo from "./Todo";

const TodoList = (todos) => {
  const todosElement = document.createElement("div");
  todosElement.id = "todos";

  for (let i = 0; i < todos.length; i++) {
    const todoElement = Todo(todos[i]);
    todosElement.appendChild(todoElement);
  }

  return todosElement;
};

export default TodoList;
