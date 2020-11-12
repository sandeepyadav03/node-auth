const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyparser = require('body-parser');
const loginRequestHandler =  require('./login');
const authenticateJWT = require('./auth')
const books = require('./books')

app.use(bodyparser.json());
app.listen(3000,()=>console.log("Auth server is listening on port 3000"));
app.post('/login',loginRequestHandler);
app.get('/books', authenticateJWT, (req, res) => {
    res.json(books);
});