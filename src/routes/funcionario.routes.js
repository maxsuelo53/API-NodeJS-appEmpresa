/**
 * arquivo: routes/funcionario.routes.js
 * descrição: arquivo responsável pela rota da API
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

 const router = require('express-promise-router')();
const funcionarioController = require('../controllers/funcionario.controller');

// ==> Definindo as rotas do CRUD - Funcionario


//==> Rota responsável por criar um novo 'Funcionario': (POST) localhost:3000/funcionario
router.post('/funcionario', funcionarioController.createFuncionario);

// ==> Rota responsável por listar todos os 'Funcionarios': (GET): localhost:3000/funcionario
router.get('/funcionario', funcionarioController.listAllFuncionarios);

// ==> Rota responsável por listar um determinado 'Funcionario' por Id: (GET): localhost:3000/funcionario/:id
router.get('/funcionario/:id', funcionarioController.findFuncionarioById)

// ==> Rota reponsável por atualizar um determinado 'Funcionario(a) por Id: (PUT): localhost:3000/funcionario/:id
router.put('/funcionario/:id', funcionarioController.updateFuncionarioById)

// ==> Rota responsável por deletar/excluir um determinado 'Funcionario(a) por Id: localhost:3000/funcionario/:id
router.delete('/funcionario/:id', funcionarioController.deleteFuncionarioById);

module.exports = router;