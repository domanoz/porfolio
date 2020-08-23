const router = require("express").Router();
const Projects = require("../models/projectsModel");
const config = require("../config");

const { handleErrors, validateId } = require("../utils/utils");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.getAllProjects();
    if (projects.length) {
      res.status(200).json(projects);
    } else {
      next({ message: "No projects.", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Projects.getProject(id);
    if (project.length) {
      res.status(200).json(project);
    } else {
      next({ message: "No project.", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = req.body;
    console.log(id);
    const updatedProject = await Projects.updateProject(id, project);
    if (updatedProject) {
      res.status(200).json(updatedProject);
    } else {
      next(config.errors.projectNotFound);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = req.body;
    const addedProject = await Projects.addProject(project);
    if (addedProject) {
      res.status(200).json(addedProject);
    } else {
      next(config.errors.projectNotFound);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const message = await Projects.deleteProject(id);
    if (message) {
      res.status(200).json(message);
    } else {
      next(config.errors.projectNotFound);
    }
  } catch (error) {
    next(error);
  }
});

handleErrors("projectsRouter", router);

module.exports = router;
