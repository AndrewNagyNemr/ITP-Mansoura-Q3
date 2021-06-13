const mongoose = require("mongoose");
const express = require("express");
const usersRouter = require("./Routes/users")

const DB_PASS = process.env.DB_PASS
const PORT = process.env.PORT || 3000
const app = express();

//middleware
app.use(express.json())


//routes
app.use("/users", usersRouter)

mongoose.connect(`mongodb+srv://admin:${DB_PASS}@cluster0.vjfww.mongodb.net/ITP-Mansoura?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => {
        console.log("connected to mongodb");
        app.listen(PORT, ()=>{
            console.log(`listening on port ${PORT}`);
        })
    })
    .catch(console.error)

