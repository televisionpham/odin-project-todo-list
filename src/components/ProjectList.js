import myStore from "../store/myStore";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const projectsElement = document.createElement("div");
  projectsElement.id = "projects";

  const render = () => {
    projectsElement.innerHTML = "";
    for (const project of myStore.getState().projects) {
      projectsElement.appendChild(ProjectItem(project));
    }
  };

  return {
    Element: projectsElement,
    render,
  };
};

export default ProjectList;
