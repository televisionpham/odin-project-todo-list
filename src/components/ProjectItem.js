const ProjectItem = (project) => {
  const element = document.createElement("div");
  element.classList.add("project-item");

  const nameElement = document.createElement("div");
  nameElement.textContent = project.name;
  element.appendChild(nameElement);

  const descriptionElement = document.createElement("div");
  descriptionElement.textContent = project.description;
  element.appendChild(descriptionElement);

  return element;
};

export default ProjectItem;
