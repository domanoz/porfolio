const router = require("express").Router();

const Services = require("../models/servicesModel");

router.get("/", async (req, res, next) => {
  try {
    const services = await Services.getAllServices();
    if (services.length) {
      res.status(200).json(services);
    } else {
      next({ message: "No services.", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
