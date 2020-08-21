const config = require("../config");

function handleErrors(name, router) {
  // eslint-disable-next-line no-unused-vars
  router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      file: name,
      message: error.message || error,
      method: req.method,
      url: req.url,
    });
  });
}

function validateId(req, res, next) {
  const { id } = req.params;
  if (id && Number.isInteger(Number(id))) {
    next();
  } else {
    next(config.errors.invalidId);
  }
}

module.exports = {
  handleErrors,
  validateId,
};
