import { isValid } from "date-fns";
import { actionTypes } from "../store/CONSTANTS";
import myStore from "../store/myStore";

const TodoEditDialog = () => {
  const element = document.createElement("dialog");
  element.id = "edit-todo-dialog";
  const form = document.createElement("form");
  form.id = "edit-todo-form";
  form.method = "dialog";
  form.innerHTML = `<input id="todoId" name="todoId" hidden>
  <div class="form-control">
      <label for="todoTitleEdit">Title</label>
      <input id="todoTitleEdit" type="text" name="todoTitleEdit" required>
  </div>
  <div class="form-control">
      <label for="todoDescriptionEdit">Description</label>
      <textarea id="todoDescriptionEdit"></textarea>
  </div>
  <div class="form-control">
      <label for="todoDueDateEdit">Due Date</label>
      <input type="date" id="todoDueDateEdit" name="todoDueDateEdit">
  </div>
  <div class="form-control">
      <label for="todoPriorityEdit">Priority</label>
      <select id="todoPriorityEdit" name="todoPriorityEdit">
          <option value="1">Low</option>
          <option value="2" selected>Normal</option>
          <option value="3">High</option>
      </select>
  </div>
  <div class="form-control">
      <label for="todoCompletedEdit">Completed</label>
      <input type="checkbox" id="todoCompletedEdit" name="todoCompletedEdit">
  </div>`;
  const submitButton = document.createElement("button");
  submitButton.id = "btnUpdateTodo";
  submitButton.type = "submit";
  submitButton.classList.add("btn");
  submitButton.classList.add("btn-primary");
  submitButton.textContent = "Update";

  form.appendChild(submitButton);
  form.addEventListener("submit", (e) => {
    const id = document.getElementById("todoId").value;
    const title = document.getElementById("todoTitleEdit").value;
    const description = document.getElementById("todoDescriptionEdit").value;
    const dueDate = new Date(document.getElementById("todoDueDateEdit").value);
    const priority = parseInt(
      document.getElementById("todoPriorityEdit").value
    );
    const completed = document.getElementById('todoCompletedEdit').checked

    const todo = {
      id,
      title,
      description,
      dueDate: isValid(dueDate) ? dueDate : null,
      priority,
      completed
    };

    myStore.dispatch({
      type: actionTypes.UPDATE_TODO,
      payload: todo,
    });
  });

  element.appendChild(form);

  return element;
};

export default TodoEditDialog;
