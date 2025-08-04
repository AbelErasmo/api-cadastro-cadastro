import dbConnection from "../config/db_connection.js";
import { criarTecnico, listarProdutoresPorTecnico } from "../models/tecnico.model.js";

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

const listarProdutoresPorTecnicos = async (req, res) => {
  const tecnicoId = req.params.id;

  try {
    const db = await dbConnection();
    const produtores = await listarProdutoresPorTecnico (db, tecnicoId);
    res.status(200).json(produtores);
  } catch (err) {
    console.error("Erro ao listar produtores por técnico:", err);
    res.status(500).json({ erro: "Erro interno ao buscar produtores." });
  }
};

export { postTecnico, listarProdutoresPorTecnicos };
