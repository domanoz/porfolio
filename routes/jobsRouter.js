const router = require("express").Router();
const config = require("../config");
const Jobs = require("../models/jobsModel");

const { requireLogin, handleErrors, validateId } = require("../utils/utils");

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

router.post("/", requireLogin, async (req, res, next) => {
  try {
    const job = req.body;
    const addedJob = await Jobs.addJob(job);
    if (addedJob.length) {
      res.status(200).json(addedJob);
    } else {
      next(config.errors.jobNotFound);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", requireLogin, validateId, async (req, res, next) => {
  try {
    const job = req.body;
    const { id } = req.params;
    const updatedJob = await Jobs.updateJob(id, job);
    if (updatedJob) {
      res.status(200).json(updatedJob);
    } else {
      next(config.errors.jobNotFound);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", requireLogin, validateId, async (req, res, next) => {
  try {
    const { id } = req.params;

    const message = await Jobs.deleteJob(id);
    if (message) {
      res.status(200).json(message);
    } else {
      next(config.errors.jobNotFound);
    }
  } catch (error) {
    next(error);
  }
});

handleErrors("jobsRouter", router);

module.exports = router;
