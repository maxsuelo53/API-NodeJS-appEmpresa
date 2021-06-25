/**
 * arquivo: controllers/funcionario.controller.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Funcionario)
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

const db = require ('../config/database.js');

exports.createFuncionario = async (req, res) => {
  const { nome, cargo, salario,data_nascimento, registro_funcionario} = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO funcionario (nome, cargo, salario, data_nascimento, registro_funcionario) VALUES ($1, $2, $3, $4, $5)",
      [nome, cargo, salario,data_nascimento, registro_funcionario]
    );
    res.status(201).send({
      message: "Funcionario added successfully!"
    });
  } catch (error) {
    console.error('createFuncionario', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por listar todos os 'Funcionarios':
exports.listAllFuncionarios = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT 
                                      id_funcionario,
                                      nome, 
                                      cargo, 
                                      salario, 
                                      to_char(data_nascimento, 'yyyy-MM-dd') as data_nascimento,
                                      registro_funcionario 
                                    FROM funcionario ORDER BY nome asc`);
    res.status(200).send(rows);
  } catch (error) {
    console.error('listAllFuncionarios', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por listar um determinado 'Funcionario' por Id:
exports.findFuncionarioById = async (req, res) => {
  
  try {
    const { id } = req.params;
    const { rows } = await db.query(`SELECT 
                                        id_funcionario,
                                        nome, 
                                        cargo, 
                                        salario, 
                                        to_char(data_nascimento, 'yyyy-MM-dd') as data_nascimento,
                                        registro_funcionario 
                                    FROM funcionario WHERE id_funcionario = $1`,
                                    [id]
    );
    if (!rows.length) {
      throw 'funcionario não encontrado';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findFuncionarioById', error);
    if (error == 'funcionario não encontrado') {
      res.status(404).send({
        message: "funcionario não encontrado"
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

// ==> Método responsável por atualizar um determinado 'Funcionario' por Id:
exports.updateFuncionarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const { nome, cargo, salario,data_nascimento, registro_funcionario } = req.body;
    const { rows } = await db.query(`UPDATE funcionario 
                                    SET nome = $1, 
                                    cargo = $2, 
                                    salario = $3, 
                                    data_nascimento = $4, 
                                    registro_funcionario = $5 
                                    WHERE id_funcionario = $6`,
      [nome, cargo, salario,data_nascimento, registro_funcionario, id]
    );
    res.status(200).send({ message: "Funcionario Updated Successfully!" });
  } catch (error) {
    console.error('updateFuncionarioById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por deletar um determinado 'Employee' por Id:
exports.deleteFuncionarioById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM funcionario WHERE id_funcionario = $1", [id]);
    res.status(200).send({ message: "Funcionario deleted successfully!" });
  } catch (error) {
    console.error('deleteFuncionarioById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};