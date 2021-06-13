const bcrypt = require("bcrypt");

const password = "123456";

// bcrypt.hash(password, 10).then(console.log)

// const hash = "$2b$10$6Exyj3h1B.kBfGlUh6CA.ObBE1gvksh4y.24LBQhyTVOAB68pxq/G"

// bcrypt.compare(password, hash).then(console.log)

(async () => {

    const hash = await bcrypt.hash(password, 10)
    console.log(hash);

})()