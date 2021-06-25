/**
 * arquivo: app.js
 * descrição: arquivo responsável por  fazer a conexão com o arquivo 'server.js'
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

 const express = require('express');
 const cors = require('cors');
 
 const app = express();
 
 // ==> Rotas da API (Funcionario):
 funcionarioRoute = require('./routes/funcionario.routes');
 
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.json({ type: 'application/vnd.api+json' }));
 app.use(cors());

app.use('/', funcionarioRoute);
 
 module.exports = app;
