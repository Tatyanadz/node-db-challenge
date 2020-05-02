const db = require("../data/config");

function findProjects() {
  return db("projects");
}
function findResources() {
  return db("resources");
}
function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}
function findTasksByProject(id) {
  return db("projects as p")
    .join("tasks as t", "p.id", "t.project_id")
    .where("p.id", id)
    .select(
      "p.name as project",
      "p.description as project_description",
      "t.description as task_description",
      "t.notes as task_notes",
      "t.project_id",
      "t.completed"
    );
}
function addResource(newResource) {
  return db("resources")
    .insert(newResource)
    .then(([id]) => {
      return findByResourceId(id);
    });
}
function addProject(newProject) {
  return db("projects")
    .insert(newProject)
    .then(([id]) => {
      return findById(id);
    });
}
function addTask(newTask, id) {
  return db("tasks")
    .insert(newTask)
    .where("tasks.id", id)
    .then(([id]) => {
      return findByTaskId(id);
    });
}
function findByTaskId(id) {
  return db("tasks")
    .where({ id })
    .first();
}
function findByResourceId(id) {
  return db("resources")
    .where({ id })
    .first();
}

module.exports = {
  findProjects,
  findResources,
  findById,
  findTasksByProject,
  addResource,
  addProject,
  addTask,
  findByTaskId,
  findByResourceId
};