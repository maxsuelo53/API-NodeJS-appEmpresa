const db = require ('../config/database.js');

exports.createSetorFuncionario = async (req, res) => {
  const { id_funcionario, id_setor} = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO setor_funcionario (id_funcionario, id_setor) VALUES ($1, $2)",
      [id_funcionario, id_setor]
    );
    res.status(201).send({
      message: "Setor preenchido added successfully!"
    });
  } catch (error) {
    console.error('createSetorFuncionario', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};


exports.createSetorFuncionario = async (req, res) => {
  const { id_funcionario, id_setor} = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO setor_funcionario (id_funcionario, id_setor) VALUES ($1, $2)",
      [id_funcionario, id_setor]
    );
    res.status(201).send({
      message: "Setor preenchido added successfully!"
    });
  } catch (error) {
    console.error('createSetorFuncionario', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};