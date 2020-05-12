const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express()

app.use(cors());
//para avisar o express que usaremos json, com isso podemos receber request bodies
app.use(express.json())
app.use(routes);


app.listen(3333);