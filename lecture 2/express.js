const express = require("express");
const todosRouter = require("./routes/todos")

const app = express();

app.use(express.json());

app.use("/todos" ,todosRouter)

app.get("/", (req, res) => {
    res.send("<h1>Hello to my server</h1>")
})

app.listen(3000)