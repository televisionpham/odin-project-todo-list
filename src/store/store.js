const store = () => {
  let state = {
    todos: [
      {
        title: "abc",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        dueDate: new Date(),
        priority: 2,
        completed: false,
      },
    ],
  };

  const getState = () => {
    return state;
  };

  const setState = (action) => {};

  return { getState, setState };
};

export default store;
