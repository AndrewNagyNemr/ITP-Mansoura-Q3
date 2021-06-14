const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcrypt")

const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) return res.status(401).send("Invalid email or password");
    const validPass = await bcrypt.compare(password, user.password)
    if (!validPass) return res.status(401).send("Invalid email or password");
    const token = jwt.sign({ email: user.email, name: user.name }, SECRET_KEY)
    res.json({ token })
})

module.exports = router