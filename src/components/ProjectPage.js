import ProjectForm from "./ProjectForm";
import ProjectHeader from "./ProjectHeader";
import ProjectList from "./ProjectList";

const ProjectPage = () => {
  const element = document.createElement("div");
  element.classList.add("content");
  element.appendChild(ProjectHeader());
  element.appendChild(ProjectForm());
  const projectList = ProjectList();
  element.appendChild(projectList.Element);
  projectList.render();
  return element;
};

export default ProjectPage;
