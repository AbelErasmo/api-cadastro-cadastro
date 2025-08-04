import dbConnection from "../config/db_connection.js";
import criarProdutor from "../models/produtor.model.js";
import {
  atribuirProdutor,
  transferirProdutor,
} from "../models/produtores_campanhas.model.js";

export const postProdutor = async (req, res) => {
  const { nome, localizacao } = req.body;

  if (!nome || !localizacao) {
    return res
      .status(400)
      .json({ erro: "Nome e a localização são obrigatórios." });
  }

  try {
    const db = await dbConnection();
    const novoProdutor = await criarProdutor(db, { nome, localizacao });
    res.status(201).json(novoProdutor);
  } catch (err) {
    console.error("Erro ao cadastrar produtor:", err);
    res.status(500).json({ erro: "Erro interno ao cadastrar produtor." });
  }
};

export const postAtribuirProdutor = async (req, res) => {
  const { produtor_id, tecnico_id, campanha_id } = req.body;

  if (!produtor_id || !tecnico_id || !campanha_id) {
    return res
      .status(400)
      .json({
        erro: "Campos obrigatórios: produtor_id, tecnico_id, campanha_id.",
      });
  }

  try {
    const db = await dbConnection();
    const relacionamento = await atribuirProdutor(db, {
      produtor_id,
      tecnico_id,
      campanha_id,
    });

    res.status(201).json({
      mensagem: "Produtor atribuído com sucesso.",
      relacionamento,
    });
  } catch (err) {
    console.error("Erro ao atribuir produtor:", err);
    res.status(500).json({ erro: "Erro interno ao atribuir produtor." });
  }
};

export const putTransferirProdutor = async (req, res) => {
  const { produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id } =
    req.body;

  if (!produtor_id || !tecnico_antigo_id || !tecnico_novo_id || !campanha_id) {
    return res.status(400).json({ erro: "Os campos são obrigatórios." });
  }

  try {
    const db = await dbConnection();
    const resultado = await transferirProdutor(db, {
      produtor_id,
      tecnico_antigo_id,
      tecnico_novo_id,
      campanha_id,
    });

    res.status(200).json({
      mensagem: "Produtor transferido com sucesso.",
      resultado,
    });
  } catch (err) {
    console.error("Erro ao transferir produtor:", err);
    res
      .status(500)
      .json({ erro: err.message || "Erro interno ao transferir produtor." });
  }
};
