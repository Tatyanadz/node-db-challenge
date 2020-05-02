const express = require("express");

const db = require("./projects-model");

const router = express.Router();

// GET 
router.get("/", async (req, res, next) => {
  try {
    const projects = await db.findProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

// GET for tasks
router.get("/:id/tasks", async (req, res, next) => {
  try {
    const tasks = await db.findTasksByProject(req.params.id);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// GET for resources
router.get("/resources", async (req, res, next) => {
  try {
    const resources = await db.findResources();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

// POST 
router.post("/", async (req, res, next) => {
  try {
    const newProject = db.addProject(req.body);
    res.json(newProject);
  } catch (err) {
    next(err);
  }
});

// POST for a new task 
router.post("/:id/tasks", async (req, res, next) => {
  try {
    const newTask = await db.addTask(req.body, req.params.id);
    res.json(newTask);
  } catch (err) {
    next(err);
  }
});

// POST for a new resource 
router.post("/resources", async (req, res, next) => {
  try {
    const newResource = await db.addResource(req.body);
    res.json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;