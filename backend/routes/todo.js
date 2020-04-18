const express = require("express");
const router = express.Router();
const todoController = require('../controllers/todo');

router.post("/post", todoController.createTodo);
router.get("/get", todoController.getTodo);
router.delete("/delete/:id", todoController.deleteTodo);
module.exports = router;
