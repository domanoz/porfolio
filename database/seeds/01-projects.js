exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([
    knex("project_stack").truncate(),
    knex("projects").truncate(),
  ]);

  // Inserts seed entries

  const testProjects = [
    {
      title: "Example title 1",
      description: "Example description of the project 1",
      github: "https://github.com/domanoz/dogLovers-forum",
      url: "https://doglovers-dd3c5.web.app/",
      image:
        "https://image.shutterstock.com/z/stock-photo-project-management-scheduling-concept-with-gantt-chart-planning-with-tasks-and-milestones-to-1148670914.jpg",
    },
    {
      title: "Example title 2",
      description: "Example description of the project 2",
      github: "https://github.com/domanoz/dogLovers-forum",
      url: "https://doglovers-dd3c5.web.app/",
      image:
        "https://image.shutterstock.com/z/stock-photo-project-management-scheduling-concept-with-gantt-chart-planning-with-tasks-and-milestones-to-1148670914.jpg",
    },
  ];

  const test_project_stack = [
    { projects_id: 1, title: "example stack 1" },
    {
      projects_id: 2,
      title: "example stack 2",
    },
    {
      projects_id: 1,
      title: "example stack 3",
    },
    {
      projects_id: 1,
      title: "example stack 4",
    },
    {
      projects_id: 2,
      title: "example stack 5",
    },
  ];

  await knex("projects").insert(testProjects);

  await knex("project_stack").insert(test_project_stack);
  // console.log(`Created projects: ${createdProjects}`);
};
