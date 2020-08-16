exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable("projects", (projects) => {
      projects.increments().notNullable();
      projects.string("title").notNullable().unique();
      projects.text("description").notNullable();
      projects.string("github").notNullable();
      projects.string("url").notNullable();
      projects.string("image").notNullable();
    }),
    knex.schema.createTable("project_stack", (project_stack) => {
      project_stack.increments().notNullable();
      project_stack.string("title").notNullable();
      project_stack
        .integer("projects_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("cascade");
    }),
  ]);
};

exports.down = async (knex) => {
  await Promise.all([
    knex.schema.dropTableIfExists("project_stack"),
    knex.schema.dropTableIfExists("projects"),
  ]);
};
