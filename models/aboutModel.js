const db = require("../database/dbConfig");
const knexnest = require("knexnest");

const getAbout = (filter) => {
  const sql = db("about")
    .select(
      "about.id AS _id",
      "about.info AS _info",
      "about.description AS _description",
      "about_stack.id AS _stack__id",
      "about_stack.title AS _stack__title"
    )
    .innerJoin("about_stack", "about.id", "about_stack.about_id");

  if (!filter) {
    return knexnest(sql);
  } else {
    return knexnest(
      db("about")
        .select(
          "about.id AS _id",
          "about.info AS _info",
          "about.description AS _description",
          "about_stack.id AS _stack__id",
          "about_stack.title AS _stack__title"
        )
        .innerJoin("about_stack", "about.id", "about_stack.about_id")
        .where(filter)
    );
  }
};

module.exports = {
  getAbout,
};
