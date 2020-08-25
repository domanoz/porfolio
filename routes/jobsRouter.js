const router = require("express").Router();
const config = require("../config");
const Jobs = require("../models/jobsModel");

const { handleErrors, validateId } = require("../utils/utils");

router.get("/", async (req, res, next) => {
  try {
    const jobs = await Jobs.getAllJobs();

    if (jobs.length) {
      res.status(200).json(jobs);
    } else {
      next(config.errors.jobNotFound);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const job = req.body;
    const addedJob = await Jobs.addJob(job);
    if (addedJob) {
      res.status(200).json(addedJob);
    } else {
      next(config.errors.jobNotFound);
    }
  } catch (error) {
    next(error);
  }
});

handleErrors("jobsRouter", router);

module.exports = router;
