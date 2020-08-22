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

const updateAbout = (id, data) => {
  for (let i = 0; i < data.stack.length; i++) {
    db("about_stack")
      .where({ about_id: 1, id: data.stack[i].id })
      .update({ title: data.stack[i].title })
      .then(() => {
        console.log("Updated");
      });
  }
  const updated = db("about")
    .where({ id })
    .update({ info: data.info, description: data.description })
    .then(() => getAbout());

  return updated;
};

module.exports = {
  getAbout,
  updateAbout,
};
