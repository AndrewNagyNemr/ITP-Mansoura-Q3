const express = require("express");
const User = require("../models/users")

const router = express.Router();

router.get("/", async (req, res) => {
    const users = await User.find(); //model
    res.json(users) //user
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id); 
    res.json(user)
})

router.post("/", async (req, res) => {
    const { name, email, password } = req.body
    if(!name) return res.status(400).send("name is required")
    const user = await new User({ name, email, password }).save()
    res.json(user)
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { name, email, password } = req.body
    const user = await User.findByIdAndUpdate(id, { name, email, password }, { new: true })
    res.json(user)
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    res.json(user)
})


module.exports = router