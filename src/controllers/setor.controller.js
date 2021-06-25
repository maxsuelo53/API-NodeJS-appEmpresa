/**
 * arquivo: controllers/setor.controller.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Setor)
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

 const db = require ('../config/database.js');

  // ==> Método responsável por criar 'Setor':
 exports.createSetor = async (req, res) => {
   const { nome,local } = req.body;
   try {
     const { rows } = await db.query(
       "INSERT INTO setor (nome, local) VALUES ($1, $2)",
       [nome, local]
     );
     res.status(201).send({
       message: "Setor added successfully!"
     });
   } catch (error) {
     console.error('CreateSetor', error);
     res.status(500).send({
       message: "Ocorreu um erro."
     });
   }
 };

 // ==> Método responsável por listar todos os 'Setores':
exports.listAllSetores = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT 
                                        id_setor,
                                        nome, 
                                        local                                         
                                      FROM setor ORDER BY nome asc`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllSetores', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };


  // ==> Método responsável por listar um determinado 'Setor' por Id:
exports.findSetorById = async (req, res) => {
  
    try {
      const { id } = req.params;
      const { rows } = await db.query(`SELECT 
                                          id_setor,
                                          nome, 
                                          local
                                      FROM setor WHERE id_setor = $1`,
                                      [id]
      );
      if (!rows.length) {
        throw 'Setor não encontrado';
      }
      res.status(200).send(rows[0]);
    } catch (error) {
      console.error('findSetorById', error);
      if (error == 'Setor não encontrado') {
        res.status(404).send({
          message: "Setor não encontrado"
        });
      } else {
        res.status(500).send({
          message: "Ocorreu um erro."
        });
      }
    }
  };

  // ==> Método responsável por atualizar um determinado 'Setor' por Id:
exports.updateSetorById = async (req, res) => {
    const { id } = req.params;
    try {
      const { nome, local } = req.body;
      const { rows } = await db.query(`UPDATE setor 
                                      SET nome = $1, 
                                      local = $2
                                      WHERE id_setor = $3`,
        [nome, local, id]
      );
      res.status(200).send({ message: "Setor Updated Successfully!" });
    } catch (error) {
      console.error('updateSetorById', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };


  // ==> Método responsável por deletar um determinado 'Setor' por Id:
exports.deleteSetorById = async (req, res) => {
    const { id } = req.params;
    try {
      await db.query("DELETE FROM setor WHERE id_setor = $1", [id]);
      res.status(200).send({ message: "Setor deleted successfully!" });
    } catch (error) {
      console.error('deleteSetorById', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };