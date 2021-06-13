const express = require("express");

const router = express.Router();

const todos = [
    { id: 1, task: "go to school" }
]

router.get("/", (req, res) => {
    //communication with the database <== ODM <= Models


    res.json(todos)
})

router.get("/:id", (req, res) => {
    const id = +req.params.id
    const todo = todos.find((tdo) => tdo.id === id)
    if (!todo) return res.status(404).send("No todo with the given id")
    res.json(todo)
})

router.post("/", (req, res) => {
    const { task } = req.body
    if (!task) return res.status(400).send("task is required")
    const lastId = todos[todos.length - 1].id
    todos.push({ id: lastId + 1, task })
    res.json(todos)
})

router.delete("/:id", (req, res) => {
    const id = +req.params.id
    const todo = todos.find((tdo) => tdo.id === id)
    if (!todo) return res.status(404).send("No todo with the given id");
    todos.splice(todos.indexOf(todo), 1)
    res.json(todos);
})

router.put("/:id", (req, res) => {
    const id = +req.params.id;
    const newTask = req.body.task
    if (!newTask) return res.status(400).send("task is required")
    const todo = todos.find((tdo) => tdo.id === id)
    if (!todo) return res.status(404).send("No todo with the given id");
    todo.task = newTask
    res.json(todo)
})

module.exports = router;