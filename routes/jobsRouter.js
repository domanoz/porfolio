const router = require("express").Router();

const Jobs = require("../models/jobsModel");

router.get("/", async (req, res, next) => {
  try {
    const jobs = await Jobs.getAllJobs();

    if (jobs.length) {
      // res.status(200).json({ message: "Working" });
      res.status(200).json(jobs);
    } else {
      next({ message: "No data.", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (jobs.length) {
      // res.status(200).json({ message: "Working" });
      res.status(200).json(jobs);
    } else {
      next({ message: "No data.", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
