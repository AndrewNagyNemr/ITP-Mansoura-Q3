const mongoose = require("mongoose");
const express = require("express");
const usersRouter = require("./Routes/users")
const authRouter = require("./Routes/login")
const logger = require("./middleware/logger")

const DB_PASS = process.env.DB_PASS
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 3000
const app = express();

//middleware
app.use(express.json()) // parse data from req body => req.body
if (NODE_ENV === "development")
    app.use(logger)

// //template engine
// app.get("/", async (req, res) => {
//     const users = await User.find()

//     res.send(`
//         <h1>Users APP</h1>
//         <p>${users[0].name}</p>
//         <p>${users[0].email}</p>
//         <p>${users[0].password}</p>
//     `)
// })

//routes
app.use("/auth", authRouter)
app.use("/users", usersRouter)

mongoose.connect(`mongodb+srv://admin:${DB_PASS}@cluster0.vjfww.mongodb.net/ITP-Mansoura?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)
    .then(() => {
        console.log("connected to mongodb");
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })
    })
    .catch(console.error)

