exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([
    knex("project_stack").delete(),
    knex("projects").delete(),
  ]);

  // Inserts seed entries

  const projects = [
    {
      title: "Forum website",
      description:
        "Simple forum built from scratch, implementing basin funcionality without using third party libraries. Because of free hosting it loads slowly and images are deleted after 30 minutes",
      github: "https://github.com/domanoz/dogLovers-forum",
      url: "https://doglovers-dd3c5.web.app/",
      image: "https://i.ibb.co/r2dxKyB/forum-doglovers.jpg",
    },
    {
      title: "Portfolio",
      description:
        "Portfolio you are looking at, it has admin panel where owner can change, add or delete data without looking at code",
      github: "https://github.com/domanoz/porfolio",
      url: "https://domansky.tech/",
      image: "https://i.ibb.co/Dz2jPfg/portfolio-image.jpg",
    },
  ];

  const project_stack = [
    { projects_id: 1, title: "MERN stack" },
    { projects_id: 1, title: "MongoDB" },
    {
      projects_id: 1,
      title: "Express.js",
    },
    {
      projects_id: 1,
      title: "React.js",
    },
    {
      projects_id: 1,
      title: "Node.js",
    },
    {
      projects_id: 2,
      title: "Node.js",
    },
    {
      projects_id: 2,
      title: "Express.js",
    },
    {
      projects_id: 2,
      title: "React.js",
    },
    {
      projects_id: 2,
      title: "Redux",
    },
    {
      projects_id: 2,
      title: "postgreSQL",
    },
    {
      projects_id: 2,
      title: "SQLite",
    },
  ];

  await knex("projects").insert(projects);

  await knex("project_stack").insert(project_stack);
  // console.log(`Created projects: ${createdProjects}`);
};
