const mongoose = require("mongoose");
const User = require("./models/users");

const DB_PASS = process.env.DB_PASS

// mongoose.connect(`mongodb+srv://admin:${DB_PASS}@cluster0.vjfww.mongodb.net/ITP-Mansoura?retryWrites=true&w=majority`)
//     .then(async() => {
//         console.log("connected to mongodb");
//         const newUser = new User({name:"Ahmed", email:"email@email.com", password:"12345"})
//         const result = await newUser.save()
//         console.log(result);
//     })
//     .catch(console.error)

mongoose.connect(`mongodb+srv://admin:${DB_PASS}@cluster0.vjfww.mongodb.net/ITP-Mansoura?retryWrites=true&w=majority`)
    .then(() => {
        console.log("connected to mongodb");
        const newUser = new User({ name: "Ahmed", email: "email@email.com", password: "12345" })
        return newUser.save()

    }).then(console.log)
    .catch(console.error)

//mongodb://localhost/ITP-Mansoura