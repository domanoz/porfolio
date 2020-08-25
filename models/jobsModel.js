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

const addJob = async (job) => {
  return await db
    .transaction(function (t) {
      return db("jobs")
        .transacting(t)
        .insert({
          company: job.company,
          position: job.position,
        })
        .then(function (response) {
          const jobsStackToInsert = job.description.map((jb) => ({
            name: jb.name,
            jobs_id: response[0],
          }));
          console.log(jobsStackToInsert);
          return db("jobs_description")
            .transacting(t)
            .insert(jobsStackToInsert);
        })
        .then(t.commit)
        .catch(t.rollback);
    })
    .then(function () {
      console.log("Created new job");
    })
    .catch(function () {
      console.log("Creating new job failed");
    });
};

const updateJob = (id, job) => {
  for (let i = 0; i < job.description.length; i++) {
    db("jobs_description")
      .where({ jobs_id: id, id: job.description[i].id })
      .update({ name: job.description[i].name })
      .then(() => {
        console.log("Updated");
      });
  }
  const updated = db("jobs")
    .where({ id })
    .update({
      company: job.company,
      position: job.position,
    })
    .then(() => console.log("Updated job"));

  return updated;
};

const deleteJob = (id) => {
  db("jobs_description")
    .where({ jobs_id: id })
    .del()
    .then(() => {
      console.log("Deleted job descripction");
    });

  return db("jobs")
    .where({ id })
    .del()
    .then(() => {
      return {
        message: "Job deleted",
      };
    })
    .catch(() => {
      console.log("Job wasnt deleted");
    });
};

module.exports = {
  getAllJobs,
  addJob,
  deleteJob,
  updateJob,
};
