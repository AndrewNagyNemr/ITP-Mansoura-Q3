const jwt = require("jsonwebtoken");

const user = {
    name: "Ahmed",
    email: "email@email.com",
    type: "admin",
    password: ""
}

const token = jwt.sign(
    { name: user.name, email: user.email, type: user.type }
    , "MyPrivateKey")

console.log(token );

//============================>

const result = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWhtZWQiLCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTYyMzY2Mzk3OH0._DTvQuNhqsGaqULjVMysagdUiGQBKm_G7gba2X0gnSQ")
console.log(result);