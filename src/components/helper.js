const createElement = (tag, textContent) => {
  const element = document.createElement(tag);
  element.textContent = textContent;
  return element;
};

const priorityEnum = {
  1: "Low",
  2: "Normal",
  3: "High",
};

export { createElement, priorityEnum };
