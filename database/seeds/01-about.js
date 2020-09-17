exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([knex("about_stack").delete(), knex("about").delete()]);

  // Inserts seed entries

  const testAbout = {
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales mauris a elit viverra, vel molestie sapien ornare. LAL AL AL ALL ALALAL LA LA LA LLA LA LA LA LLA LA L AL ALL ALA LA L",
    description: "Example description of the project",
    url: "https://doglovers-dd3c5.web.app/",
  };

  const test_about_stack = [
    { about_id: 1, title: "example about 1" },
    {
      about_id: 1,
      title: "example about 2",
    },
    {
      about_id: 1,
      title: "example about 3",
    },
  ];

  await knex("about").insert(testAbout);

  await knex("about_stack").insert(test_about_stack);
};
