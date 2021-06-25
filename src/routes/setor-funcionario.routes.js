/**
 * arquivo: routes/setor-funcionario.routes.js
 * descrição: arquivo responsável pela rota da API
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

 const router = require('express-promise-router')();
 const setorFuncionarioController = require('../controllers/setor-funcionario.controller');
 
 // ==> Definindo as rotas do CRUD - Setor-Funcionario
 
 
 //==> Rota responsável por criar um novo 'SeSetor-Funcionariotor': (POST) localhost:3000/Setor
 router.post('/setor-funcionario', setorFuncionarioController.createSetorFuncionario);
 
 // ==> Rota responsável por listar todos os 'Setor-Funcionario': (GET): localhost:3000/Setor
 //router.get('/setor-funcionario', setorFuncionarioController.listAllSetorFuncionarios);
 
 // ==> Rota responsável por listar um determinado 'Setor-Funcionario' por Id: (GET): localhost:3000/Setor/:id
 //router.get('/setor-funcionario/:id', setorFuncionarioController.findSetorFuncionarioById)
 
 // ==> Rota reponsável por atualizar um determinado 'Setor-Funcionario(a) por Id: (PUT): localhost:3000/Setor/:id
 //router.put('/setor-funcionario/:id', setorFuncionarioController.updateSetorFuncionarioById)
 
 // ==> Rota responsável por deletar/excluir um determinado 'Setor-Funcionario(a) por Id: localhost:3000/Setor/:id
 //router.delete('/setor-funcionario/:id', setorFuncionarioController.deleteSetorFuncionarioById);
 
 module.exports = router;