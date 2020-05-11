const express = require('express');
const OngController = require('./controllers/OngController')

const routes = express.Router();

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

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

/*
routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
		aluno: 'Fábio Araujo'
    });
});

routes.get('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    return response.json({
        id: params.id
    });
});

routes.get('/hello', (request, response) => {
    const params = request.query;
    console.log(params);
    return response.json({
        message: 'Hello ' + params.nome
    });
});

routes.post('/users/', (request, response) => {
    const params = request.body;
    console.log(params);

    return response.json(params);
});
*/
module.exports = routes;