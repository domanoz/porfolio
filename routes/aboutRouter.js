const router = require("express").Router();
const About = require("../models/aboutModel");

router.get("/", async (req, res, next) => {
  try {
    const about = await About.getAbout();
    if (about.length) {
      res.status(200).json(about);
    } else {
      next({ message: "No about information.", status: 404 });
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
