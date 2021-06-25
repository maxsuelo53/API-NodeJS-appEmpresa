/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado Back-End
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo a API Node.js + PostgreSQL',
        version: '1.0.0'
    });     
});

module.exports = router;