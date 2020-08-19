const db = require("../database/dbConfig");
const knexnest = require("knexnest");

const getAllJobs = (filter) => {
  const sql = db("jobs")
    .select(
      "jobs.id AS _id",
      "jobs.company AS _company",
      "jobs.position AS _position",
      "jobs_description.id AS _description__id",
      "jobs_description.name AS _description__name"
    )
    .innerJoin("jobs_description", "jobs.id", "jobs_description.jobs_id");

  if (!filter) {
    return knexnest(sql);
  } else {
    return knexnest(
      db("jobs")
        .select(
          "jobs.id AS _id",
          "jobs.company AS _company",
          "jobs.position AS _position",
          "jobs_description.id AS _description__id",
          "jobs_description.name AS _description__name"
        )
        .innerJoin("jobs_description", "jobs.id", "jobs_description.jobs_id")
        .where(filter)
    );
  }
};
module.exports = {
  getAllJobs,
};
