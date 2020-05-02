
exports.seed = async function(knex) {
  await knex("projects").insert([
    {name: "book", completed: false},
    {name: "drawing", completed: false},
    {name: "Workout", completed: false}
  ])
};
