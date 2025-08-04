import dbConnection from "../config/db_connection.js";
import criarEmpresa from "../models/empresa.model.js";

const postEmpresa = async (req, res) => {
  const { nome, cnpj, telefone, email } = req.body;
  await criarEmpresa
  if (!nome || !cnpj || !telefone || !email) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  try {
    const db = await dbConnection();
    const novaEmpresa = await criarEmpresa(db, { nome, cnpj, telefone, email });
    res.status(201).json(novaEmpresa);
  } catch (err) {
    console.error("Erro ao cadastrar empresa:", err);
    res.status(500).json({ erro: "Erro interno ao cadastrar empresa." });
  }
};

export default postEmpresa;
