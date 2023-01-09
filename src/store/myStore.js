import { v4 as uuidv4 } from "uuid";
import { actionTypes } from "./CONSTANTS";

const myStore = (function () {
  const state = {
    todos: [
      {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        title: "abc",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        dueDate: new Date(),
        priority: 2,
        completed: false,
        projectId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e",
      },
      {
        id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        title: "XYZ",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        dueDate: new Date(),
        priority: 1,
        completed: true,
        projectId: null,
      },
    ],
    projects: [
      {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e",
        name: "Project mot",
        description: "Project one",
      },
    ],
  };

  const elements = [];

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    switch (action.type) {
      case actionTypes.ADD_TODO:
        state.todos.push({
          ...action.payload,
          id: uuidv4(),
        });
        break;
      case actionTypes.REMOVE_TODO:
        state.todos = state.todos.filter((x) => x.id !== action.payload);
        break;
      case actionTypes.UPDATE_TODO:
        state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.description = action.payload.description;
            todo.dueDate = action.payload.dueDate;
            todo.priority = action.payload.priority;
            todo.completed = action.payload.completed;
          }
        });
        break;
    }
    console.log({ state, action });
    publish();
  };

  const subscribe = (element) => {
    elements.push(element);
  };

  const publish = () => {
    for (const element of elements) {
      element.render();
    }
  };

  return { getState, dispatch, subscribe };
})();

export default myStore;
