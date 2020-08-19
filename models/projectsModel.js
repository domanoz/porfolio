const db = require("../database/dbConfig");
const knexnest = require("knexnest");

const getAllProjects = (filter) => {
  const sql = db("projects")
    .select(
      "projects.id AS _id",
      "projects.title AS _title",
      "projects.description AS _description",
      "projects.github AS _github",
      "projects.url AS _url",
      "projects.image AS _image",
      "project_stack.id AS _stack__id",
      "project_stack.title AS _stack__title"
    )
    .innerJoin("project_stack", "projects.id", "project_stack.projects_id");

  if (!filter) {
    return knexnest(sql);
  } else {
    return knexnest(
      db("projects")
        .select(
          "projects.id AS _id",
          "projects.title AS _title",
          "projects.description AS _description",
          "projects.github AS _github",
          "projects.url AS _url",
          "projects.image AS _image",
          "project_stack.id AS _stack__id",
          "project_stack.title AS _stack__title"
        )
        .innerJoin("project_stack", "projects.id", "project_stack.projects_id")
        .where(filter)
    );
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
