// Importa os módulos necessários
const express = require("express");
const cors = require("cors");

// Cria a aplicação Express
const app = express();

// Ativa o CORS para permitir que o front acesse o back
app.use(cors());

// Faz o Express entender JSON no corpo das requisições
app.use(express.json());

// Rota principal para testar se a API está funcionando
app.get("/", (req, res) => {
  res.send("API está rodando 🚀");
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
