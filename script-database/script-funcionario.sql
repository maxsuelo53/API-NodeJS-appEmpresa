CREATE TABLE funcionario (

	id_funcionario SERIAL PRIMARY KEY NOT NULL,
	nome VARCHAR(255) NOT NULL,
	cargo VARCHAR(255) NOT NULL,
	salario NUMERIC (7,2) NOT NULL,
	data_nascimento DATE NOT NULL,
	registro_funcionario INTEGER NOT NULL
)