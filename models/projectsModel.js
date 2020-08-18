const db = require("../database/dbConfig");

const getAllProjects = (filter) => {
  if (!filter) {
    return db("projects").join(
      "project_stack",
      "project_stack.projects_id",
      "=",
      "projects.id"
    );
    // .select("project_stack.title");
  } else {
    return db("projects").where(filter);
  }
};

const getProject = (filter) => {
  return db("projects").where(filter).first();
};

const addProject = (project) => {
  return db("projects")
    .insert(project, "id")
    .then((ids) => getProject({ id: ids[0] }));
};

const updateProject = (id, project) => {
  return db("projects")
    .where({ id })
    .update(project)
    .then((ids) => getProject({ id: ids[0] }));
};

const deleteProject = (id) => {
  return db("projects").where({ id }).del();
};

module.exports = {
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
  addProject,
};
