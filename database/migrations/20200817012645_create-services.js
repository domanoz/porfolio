exports.up = function (knex) {
  return knex.schema.createTable("services", (services) => {
    services.increments().notNullable();
    services.string("icon").notNullable();
    services.string("title").notNullable();
    services.text("text").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("services");
};
