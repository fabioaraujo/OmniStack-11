const express = require('express');

const app = express()

//para avisar o express que usaremos json, com isso podemos receber request bodies
app.use(express.json())

/**
 * Query params: Parâmetros de query após "?", acessados através de request.query
 * Route params: Parâmetros "path", são definidos como ":id", exemplo: /users/:id, acessado através de request.params
 * Request body: acessado através de request.body
 */

 /**
  * Driver SQL: SQL Nativo
  * Query Builder KNEX: table('users').select('*').where()
  * 
  */

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
		aluno: 'Fábio Araujo'
    });
});

app.get('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    return response.json({
        id: params.id
    });
});

app.get('/hello', (request, response) => {
    const params = request.query;
    console.log(params);
    return response.json({
        message: 'Hello ' + params.nome
    });
});

app.post('/users/', (request, response) => {
    const params = request.body;
    console.log(params);

    return response.json(params);
});

app.listen(3333);