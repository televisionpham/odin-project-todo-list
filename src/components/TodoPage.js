import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const TodoPage = () => {
  const element = document.createElement("div");
  element.classList.add("content");
  element.appendChild(TodoHeader());

  element.appendChild(TodoForm());
  
  const todoList = TodoList();
  element.appendChild(todoList.Element);
  todoList.render();

  return element;
};

export default TodoPage;
