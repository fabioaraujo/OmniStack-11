const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

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

  routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  });

routes.post('/ongs', async (request, response) => {
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    //await para que o node aguarde a execução da função antes de continuar
    await connection('ongs').insert({
        id,
        name, 
        email, 
        whatsapp, 
        city, 
        uf
    });

    return response.json({ id });
});

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