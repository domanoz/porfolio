exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable("about", (about) => {
      about.increments().notNullable();
      about.string("info", 300).notNullable();
      about.text("description", 400).notNullable();
      about.string("url").notNullable();
    }),
    knex.schema.createTable("about_stack", (about_stack) => {
      about_stack.increments().notNullable();
      about_stack.string("title").notNullable();
      about_stack
        .integer("about_id")
        .unsigned()
        .references("id")
        .inTable("about")
        .onDelete("cascade");
    }),
  ]);
};

exports.down = async (knex) => {
  await Promise.all([
    knex.schema.dropTableIfExists("about_stack"),
    knex.schema.dropTableIfExists("about"),
  ]);
};
