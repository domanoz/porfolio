const router = require("express").Router();
const About = require("../models/aboutModel");
const config = require("../config");

const { handleErrors, validateId } = require("../utils/utils");

router.get("/", async (req, res, next) => {
  try {
    const about = await About.getAbout();
    if (about.length) {
      res.status(200).json(about);
    } else {
      next(config.errors.aboutNotFound);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    // console.log(id);
    const updatedAbout = await About.updateAbout(id, data);
    if (updatedAbout) {
      res.status(200).json(updatedAbout);
    } else {
      next(config.errors.aboutNotFound);
    }
  } catch (error) {
    next(error);
  }
});

handleErrors("aboutRouter", router);

module.exports = router;
