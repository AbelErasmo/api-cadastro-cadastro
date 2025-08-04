
const criarCampanha = async (db, dados) => {
  const result = await db.execute(
    "INSERT INTO campanhas (nome, empresa_id, data_inicio, data_fim) VALUES (?, ?, ?, ?)",
    [dados.nome, dados.empresa_id, dados.data_inicio, dados.data_fim]
  );

  const insertId = result && result[0] && result[0].insertId ? result[0].insertId : null;

  return {
    id: insertId,
    ...dados
  };
};

export default criarCampanha;