exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([knex("jobs_description").delete(), knex("jobs").delete()]);

  // Inserts seed entries

  const testJobs = [
    {
      company: "Example company 1",
      position: "Data analist 1",
    },
    {
      company: "Example company 2",
      position: "Data analist 2",
    },
  ];

  const test_jobs_description = [
    { jobs_id: 1, name: "Example desc  lorem ipsum bla 111" },
    {
      jobs_id: 2,
      name: "Example desc  lorem ipsum bla 222",
    },
    {
      jobs_id: 1,
      name: "Example desc  lorem ipsum bla 333",
    },
    {
      jobs_id: 1,
      name: "Example desc  lorem ipsum bla 444",
    },
    {
      jobs_id: 2,
      name: "Example desc  lorem ipsum bla 555",
    },
  ];

  await knex("jobs").insert(testJobs);

  await knex("jobs_description").insert(test_jobs_description);
  // console.log(`Created projects: ${createdProjects}`);
};
