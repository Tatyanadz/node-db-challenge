exports.seed = async function(knex) {
  await knex("tasks").insert([
      { description: "finish reading your book", project_id: 1, completed: false },
      { description: "Practice drawing", project_id: 2, completed: false },
      { description: "Workout for at least 20-30 minutes", project_id: 3, completed: false },
  ])
}