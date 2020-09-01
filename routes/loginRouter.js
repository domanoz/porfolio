const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const db = require("../database/dbConfig");
const config = require("../config");

const { handleErrors } = require("../utils/utils");

router.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // console.log(username);
    if (!username || !password) {
      next(config.errors.missingFields);
      return;
    }

    const user = await db("users").where({ username }).first();
    if (!user) {
      next(config.errors.invalidLogin);
      return;
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      next(config.errors.invalidLogin);
      return;
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      id: user.id,
      username: user.username,
      token,
    });
  } catch (error) {
    next(error);
  }
});

handleErrors("loginRouter", router);

module.exports = router;
