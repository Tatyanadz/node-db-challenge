
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.boolean("completed").defaultTo(false)
  })

  await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.text("name").notNull()
  })

  await knex.schema.createTable("tasks", (table) => {
      table.increments("id")
      table.text("description").notNull()
      table.integer("project_id")
      table.boolean("completed").notNull().defaultTo(false)
  })

  await knex.schema.createTable("projects_resources", (table) => {
      table.increments("id")
      table.integer("project_id").references("id").inTable("projects")
      table.integer("resource_id").references("id").inTable("resources")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources")
  await knex.schema.dropTableIfExists("projects")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("tasks")
};

