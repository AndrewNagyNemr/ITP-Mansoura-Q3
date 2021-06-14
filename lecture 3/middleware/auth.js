const jwt = require("jsonwebtoken")

const SECRET_KEY = process.env.SECRET_KEY

const auth = async (req, res, next) => {
    const token = req.headers.token
    try {
        jwt.verify(token, SECRET_KEY)
        next();
    } catch (error) {
        res.status(401).send("invalid-token")
    }
}

module.exports = auth