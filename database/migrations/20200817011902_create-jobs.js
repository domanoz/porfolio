exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable("jobs", (jobs) => {
      jobs.increments().notNullable();
      jobs.string("company").notNullable();
      jobs.string("position").notNullable();
    }),

    knex.schema.createTable("jobs_description", (jobs_desciption) => {
      jobs_desciption.increments().notNullable();
      jobs_desciption.string("name").notNullable();
      jobs_desciption
        .integer("jobs_id")
        .unsigned()
        .references("id")
        .inTable("jobs")
        .onDelete("cascade");
    }),
  ]);
};

exports.down = async (knex) => {
  await Promise.all([
    knex.schema.dropTableIfExists("jobs_description"),
    knex.schema.dropTableIfExists("jobs"),
  ]);
};
