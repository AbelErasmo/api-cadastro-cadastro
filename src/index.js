import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import dbConnection from "./config/db_connection.js";
import empresaRoutes from "./routes/empresa.routes.js";
import campanhaRoutes from "./routes/campanha.routes.js";
import produtorRoutes from "./routes/produtor.routes.js";
import tecnicoRoutes from "./routes/tecnico.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Incializando a conexao com a base de dados
 */
dbConnection();

/**
 * Definindo o uso de rotas no servidor
 */ 
app.use('/empresas', empresaRoutes);
app.use('/camapanhas', campanhaRoutes);
app.use('/produtores', produtorRoutes);
app.use('/tecnicos', tecnicoRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Rota padrão</h1>");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
