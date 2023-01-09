import { actionTypes } from "../store/CONSTANTS";
import myStore from "../store/myStore";

const TodoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById("todoTitle").value;
    const description = document.getElementById("todoDescription").value;
    const dueDate = document.getElementById("todoDueDate").value;
    const priority = document.getElementById("todoPriority").value;

    const todo = {
      title,
      description,
      dueDate: new Date(dueDate),
      priority: parseInt(priority),
      completed: false,
    };

    myStore.dispatch({
      type: actionTypes.ADD_TODO,
      payload: todo,
    });

    clear();
  };

  const clear = () => {
    document.getElementById("todoTitle").value = "";
    document.getElementById("todoDescription").value = "";
    document.getElementById("todoPriority").value = "2";
  };

  const form = document.createElement("form");
  form.id = "todoForm";
  form.method = "post";
  form.innerHTML = `<input type="text" id="todoTitle" name="todoTitle" placeholder="Title" required>
  <textarea type="text" id="todoDescription" name="todoDescription" placeholder="Description" rows="3"></textarea>
  <input type="date" id="todoDueDate" name="todoDueDate">
  <select id="todoPriority" name="todoPriority">
      <option value="1">Low</option>
      <option value="2" selected>Normal</option>
      <option value="3">High</option>
  </select>
  <button class="btn btn-primary" id="addTodo" type="submit">Add</button>`;

  form.addEventListener("submit", handleSubmit);

  return form;
};

export default TodoForm;
