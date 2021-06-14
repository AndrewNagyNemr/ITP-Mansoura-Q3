// look up email => 
// check on password => next()
//                   => res 401 "un-authorized"
// => res 401 "un-authorized"
const User = require("../models/users");
const bcrypt = require("bcrypt");

const auth = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) return res.status(401).send("Invalid email or password");
    const validPass = await bcrypt.compare(password, user.password)
    if (!validPass) return res.status(401).send("Invalid email or password");
    next();
}

module.exports = auth