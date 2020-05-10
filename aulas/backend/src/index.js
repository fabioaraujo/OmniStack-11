const express = require('express');
const routes = require('./routes');

const app = express()

//para avisar o express que usaremos json, com isso podemos receber request bodies
app.use(express.json())
app.use(routes);


app.listen(3333);