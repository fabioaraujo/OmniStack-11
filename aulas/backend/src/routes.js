const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

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

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;