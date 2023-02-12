module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new task
    router.post("/", users.create);
  
    // Retrieve all tasks
    router.get("/", users.findAll);
  
    // Retrieve all published tasks
    router.get("/published", users.findAllPublished);
  
    // Retrieve a single task with username
    router.get("/:username", users.findOne);
  
    // Update a task with id
    router.put("/:id", users.update);
  
    // Delete a task with id
    router.delete("/:id", users.delete);
  
    // Delete all tasks
    router.delete("/", users.deleteAll);
  
    app.use("/api/users", router);
  };
  