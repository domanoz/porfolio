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

const getProject = (id) => {
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
      .where("projects.id", id)
  );
};

const addProject = (project) => {
  return db("projects")
    .insert(project, "id")
    .then((ids) => getProject({ id: ids[0] }));
};

const updateProject = (id, project) => {
  console.log(id);
  for (let i = 0; i < project.stack.length; i++) {
    db("project_stack")
      .where({ projects_id: id, id: project.stack[i].id })
      .update({ title: project.stack[i].title })
      .then(() => {
        console.log("Updated");
      });
  }
  const updated = db("projects")
    .where({ id })
    .update({
      title: project.title,
      description: project.description,
      github: project.github,
      url: project.url,
      image: project.image,
    })
    .then(() => getProject(id));

  return updated;
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
