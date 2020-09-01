const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await Promise.all([knex("users").truncate()]);

  // Inserts seed entries

  const testUser = [
    {
      username: "doman",
      password: bcrypt.hashSync(process.env.ADMINPW, 11),
    },
  ];

  await knex("users").insert(testUser);
};
