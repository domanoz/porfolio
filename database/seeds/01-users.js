exports.seed = function(knex) {
  // Deletes ALL existing entries
  await Promise.all([knex("users").truncate()]);

  // Inserts seed entries

  const testUser = [
    {
      username: "doman",
      password: "web development",
      }
  ];

  await knex("users").insert(testUser);
};
