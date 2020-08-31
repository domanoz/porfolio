const router = require("express").Router();
const config = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { requireLogin, handleErrors, validateId } = require("../utils/utils");

router.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      next(config.errors.missingFields);
      return;
    }
    const user = await db("users").first();
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (isValidPassword) {
      const token = jwt.sign(
        {
          subject: user.id,
          username: user.username,
        },
        config.jwtSecret,
        config.jwtExpiresIn
      );

      res.status(200).json({
        id: user.id,
        username: user.username,
      });
    }
  } catch (error) {
    next(error);
  }
});

handleErrors("loginRouter", router);

module.exports = router;
