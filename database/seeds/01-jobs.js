exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([knex("jobs_description").delete(), knex("jobs").delete()]);

  // Inserts seed entries

  const jobs = [
    {
      company: "Sii Polska",
      position: "Data Analyst",
    },
    {
      company: "Private projects",
      position: "Fullstack developer",
    },
  ];

  const jobs_description = [
    { jobs_id: 1, name: "Verification and updating of databases" },
    {
      jobs_id: 1,
      name: "Data quality and consistency assurance",
    },
    {
      jobs_id: 1,
      name: "Communication with database administrators from other countries",
    },
    {
      jobs_id: 2,
      name: "Creating mockups for website",
    },
    {
      jobs_id: 2,
      name: "Prototyping databases",
    },
    {
      jobs_id: 2,
      name: "Building an application from scratch",
    },
  ];

  await knex("jobs").insert(jobs);

  await knex("jobs_description").insert(jobs_description);
  // console.log(`Created projects: ${createdProjects}`);
};
