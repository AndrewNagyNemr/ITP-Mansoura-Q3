const bcrypt = require("bcrypt");

const password = "123456";

bcrypt.hash(password, 10).then(console.log)

const hash = "$2b$10$lsLME7.v9RhZIGK.82i4sOWFq0towD0ETmkn6X9vEfFE7dHtplSLe"

bcrypt.compare(password, hash).then(console.log)

// (async () => {

//     const hash = await bcrypt.hash(password, 10)
//     console.log(hash);

// })()