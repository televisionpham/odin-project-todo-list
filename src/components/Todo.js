import { format, isValid } from "date-fns";
import { actionTypes } from "../store/CONSTANTS";
import myStore from "../store/myStore";
import { createElement, priorityEnum } from "./helper";

const Todo = (todo) => {
  const todoElement = document.createElement("tr");
  todoElement.classList.add("todo-item");

  const tdCompleted = document.createElement("td");
  const completedElement = document.createElement("input");
  tdCompleted.appendChild(completedElement);
  completedElement.type = "checkbox";
  completedElement.id = `chk_${todo.id}`;
  if (todo.completed) {
    completedElement.checked = true;
  }

  completedElement.addEventListener("change", (e) => {
    const td = {
      ...todo,
      completed: e.target.checked,
    };

    myStore.dispatch({
      type: actionTypes.UPDATE_TODO,
      payload: td,
    });
  });

  const titleElement = createElement("td", todo.title);
  const descriptionElement = createElement("td", todo.description);
  const dueDateElement = createElement(
    "td",
    isValid(todo.dueDate) ? format(todo.dueDate, "yyyy-MM-dd") : "-"
  );
  dueDateElement.classList.add("todo-due-date");

  const priorityElement = createElement("td", priorityEnum[todo.priority]);

  const btnRemove = document.createElement("button");
  btnRemove.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  btnRemove.id = `btnRemove_${todo.id}`;
  btnRemove.classList.add("btn");
  btnRemove.classList.add("btn-danger");
  btnRemove.classList.add("btn-action");
  btnRemove.addEventListener("click", () => {
    myStore.dispatch({
      type: actionTypes.REMOVE_TODO,
      payload: todo.id,
    });
  });

  const btnEdit = document.createElement("button");
  btnEdit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  btnEdit.id = `btnEdit${todo.id}`;
  btnEdit.classList.add("btn");
  btnEdit.classList.add("btn-primary");
  btnEdit.classList.add("btn-action");
  btnEdit.addEventListener("click", () => {
    document.getElementById("todoId").value = todo.id;
    document.getElementById("todoTitleEdit").value = todo.title;
    document.getElementById("todoDescriptionEdit").value = todo.description;
    document.getElementById("todoDueDateEdit").value = isValid(todo.dueDate)
      ? format(todo.dueDate, "yyyy-MM-dd")
      : null;
    document.getElementById("todoPriorityEdit").value = todo.priority;
    document.getElementById("todoCompletedEdit").checked = todo.completed;
    document.getElementById("edit-todo-dialog").showModal();
  });

  const tdActions = createElement("td");
  tdActions.classList.add("actions");
  tdActions.appendChild(btnEdit);
  tdActions.appendChild(btnRemove);

  todoElement.appendChild(tdCompleted);
  todoElement.appendChild(titleElement);
  todoElement.appendChild(descriptionElement);
  todoElement.appendChild(dueDateElement);
  todoElement.appendChild(priorityElement);
  todoElement.appendChild(tdActions);

  return todoElement;
};

export default Todo;
