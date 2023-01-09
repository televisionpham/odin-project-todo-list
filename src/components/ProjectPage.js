import ProjectHeader from "./ProjectHeader";

const ProjectPage = () => {
  const element = document.createElement("div");
  element.classList.add("content");
  element.appendChild(ProjectHeader());

  return element;
};

export default ProjectPage;
