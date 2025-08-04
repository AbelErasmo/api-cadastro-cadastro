
import dbConnection from "../config/db_connection.js";
import criarCampanha from "../models/campanha.model.js";

const postCampanha = async (req, res) => {
  const { nome, empresa_id, data_inicio, data_fim } = req.body;

  if (!nome || !empresa_id || !data_inicio || !data_fim) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  try {
    const db = await dbConnection();
    const novaCampanha = await criarCampanha(db, { nome, empresa_id, data_inicio, data_fim });
    res.status(201).json(novaCampanha);
  } catch (err) {
    console.error("Erro ao cadastrar campanha:", err);
    res.status(500).json({ erro: "Erro interno ao cadastrar campanha." });
  }
};

export default postCampanha;

