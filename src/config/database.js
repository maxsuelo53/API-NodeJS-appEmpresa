/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pela "connectionString"
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

//==> Conexão com a Base de dados:
const pool = new Pool({ connectionString:process.env.DATABASE_URL });

pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err)
    process.exit(-1);
});

pool.on('connect', () => {
    console.log('Base de dados conectado com sucesso!')    
});

module.exports = {
    query: (text,params) => pool.query(text,params)
};