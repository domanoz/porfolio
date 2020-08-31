const config = require("../config");
const { jwtExpiresIn } = require("../config");

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

function requireLogin(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwtExpiresIn.verify(token, config.jwtSecret, (err, decodeUser) => {
      if (err) {
        next(err);
      } else {
        req.loggedInUser = decodedUser;
        next();
      }
    });
  } else {
    next(config.errors.noTokenProvided);
  }
}

module.exports = {
  handleErrors,
  requireLogin,
  validateId,
};
