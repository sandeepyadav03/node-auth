const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const loginRequestHandler =  require('./login');


app.use(bodyparser.json());
app.listen(3000,()=>console.log("Auth server is listening on port 3000"));

app.post('/login',loginRequestHandler)