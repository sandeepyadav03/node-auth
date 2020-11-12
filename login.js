const users = require('./users')
const jwt = require('jsonwebtoken');
const accessTokenSecret = "myaccesstokensecret";
const loginRequestHandler =  (req, res)=>{
    const {username, password} = req.body;

    const user = users.find(u=>{return u.username===username&& u.password===password});

    if(user){
        const accessToken = jwt.sign({username:user.username,role:user.role}, accessTokenSecret)
        return res.json({
            accessToken
        })
    }else{
        return res.send('username or password is incorrect');
    }
}

module.exports = loginRequestHandler;