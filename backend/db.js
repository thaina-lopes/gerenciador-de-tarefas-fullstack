// Importa a biblioteca pg (PostgreSQL)
const { Pool } = require("pg");

// Cria a conexão com o banco de dados
const pool = new Pool({
  user: "seu_usuario",
  host: "localhost",
  database: "taskmanager",
  password: "sua_senha",
  port: 5432,
});

module.exports = pool;
