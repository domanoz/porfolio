exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([knex("about_stack").delete(), knex("about").delete()]);

  // Inserts seed entries

  const about = {
    info:
      "My passion is making ideas come to life, be it working solo, as part of a team or leading a team of fellow developers. My go-to technologies are React and Node.js, and I have completed a wide range of projects using them. Those are not the only two libraries/frameworks I'm familiar with though, and I'm always happy to discuss my client's needs and find the best solutions for them. I consider myself creative and hardworking, as my stats show. If you liked my profile so far, drop me a message and we'll discuss how I can be useful to your project.",
    description: "Portfolio",
    url: "https://domansky.tech/",
  };

  const about_stack = [
    { about_id: 1, title: "React" },
    {
      about_id: 1,
      title: "Nodejs",
    },
    {
      about_id: 1,
      title: "MongoDB",
    },
    {
      about_id: 1,
      title: "PostgreSQL",
    },
  ];

  await knex("about").insert(about);

  await knex("about_stack").insert(about_stack);
};
