import { createElement } from "./helper";

const ProjectHeader = () => {
  const header = document.createElement("header");
  header.appendChild(createElement("h1", "Projects"));

  return header;
};

export default ProjectHeader;
