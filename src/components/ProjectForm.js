const ProjectForm = () => {
  const form = document.createElement("form");
  form.id = "todoForm";
  form.method = "post";
  form.innerHTML = `<input type="text" id="todoTitle" name="todoTitle" placeholder="Title" required>
  <textarea type="text" id="todoDescription" name="todoDescription" placeholder="Description" rows="3"></textarea>  
  <button class="btn btn-primary" id="addProject" type="submit">Add</button>`;

  form.addEventListener("submit", () => {});

  return form;
};

export default ProjectForm;
