const router = require("express").Router();

const Services = require("../models/servicesModel");
const config = require("../config");

const { handleErrors, validateId } = require("../utils/utils");

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

router.put("/:id", validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = req.body;
    // console.log(id);
    const updatedService = await Services.updateService(id, service);
    if (updatedService) {
      res.status(200).json(updatedService);
    } else {
      next(config.errors.serviceNotFound);
    }
  } catch (error) {
    next(error);
  }
});

handleErrors("serviceRouter", router);

module.exports = router;
