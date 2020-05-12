const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express()

/**
 * configurado uso do cors, em produção podemos configurar a url origin como abaixo
 * app.use(cors({
 *  origin: 'https://meuendreco.com.br'
 * }));
 */
app.use(cors());
//para avisar o express que usaremos json, com isso podemos receber request bodies
app.use(express.json())
app.use(routes);


app.listen(3333);