exports.seed = async function(knex) {
    await knex("resources").insert([
        {name: "book"},
        {name: "ebook"},
        {name: "pencil"},
        {name: "yoga mat"},
        {name: "motivation"},
    ])
}