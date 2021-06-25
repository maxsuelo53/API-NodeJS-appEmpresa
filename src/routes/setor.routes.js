/**
 * arquivo: routes/Setor.routes.js
 * descrição: arquivo responsável pela rota da API
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

const router = require('express-promise-router')();
const setorController = require('../controllers/setor.controller');

// ==> Definindo as rotas do CRUD - Setor


//==> Rota responsável por criar um novo 'Setor': (POST) localhost:3000/Setor
router.post('/setor', setorController.createSetor);

// ==> Rota responsável por listar todos os 'Setors': (GET): localhost:3000/Setor
router.get('/setor', setorController.listAllSetores);

// ==> Rota responsável por listar um determinado 'Setor' por Id: (GET): localhost:3000/Setor/:id
router.get('/setor/:id', setorController.findSetorById)

// ==> Rota reponsável por atualizar um determinado 'Setor(a) por Id: (PUT): localhost:3000/Setor/:id
router.put('/setor/:id', setorController.updateSetorById)

// ==> Rota responsável por deletar/excluir um determinado 'Setor(a) por Id: localhost:3000/Setor/:id
router.delete('/setor/:id', setorController.deleteSetorById);

module.exports = router;