const router = require("express").Router();
const Projects = require("../models/projectsModel");
const Jobs = require("../models/jobsModel");
const Services = require("../models/servicesModel");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.getAllProjects();
    const jobs = await Jobs.getAllJobs();
    const services = await Services.getAllServices();
    if (projects.length) {
      res.status(200).json({ projects, jobs, services });
    } else {
      next({ message: "No data.", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
