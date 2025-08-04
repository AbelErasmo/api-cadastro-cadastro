import dbConnection from "../config/db_connection.js";
import criarTecnico from "../models/tecnico.model.js";

const postTecnico = async (req, res) => {
  const { nome, campanha_id } = req.body;

  if (!nome || !campanha_id) {
    return res.status(400).json({ erro: "Nome e campanha_id são obrigatórios." });
  }

  try {
    const db = await dbConnection();
    const novoTecnico = await criarTecnico(db, { nome, campanha_id });
    res.status(201).json(novoTecnico);
  } catch (err) {
    console.error("Erro ao cadastrar técnico:", err);
    res.status(500).json({ erro: "Erro interno ao cadastrar técnico." });
  }
};

export default postTecnico;
