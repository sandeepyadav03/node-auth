const users = require('./users')
const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.SECRET;
const loginRequestHandler = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret)
        return res.json({
            accessToken,
           
        })
    } else {
        return res.status(401).send({
            message: "username or password is incorrect"
        })
    }
}

module.exports = loginRequestHandler;