/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda configuração e execução do Back-End ('Funcionario')
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta: ',port);
});
