const router = require("express").Router();
const Projects = require("../models/projectsModel");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.getAllProjects();
    if (projects) {
      res.status(200).json(projects);
    } else {
      next({ message: "No projects.", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

router.use((err, res, req, next) => {
  res.status(err.status || 500).json({
    message: err.message || err,
    method: req.method,
    url: req.url,
  });
});

module.exports = router;
