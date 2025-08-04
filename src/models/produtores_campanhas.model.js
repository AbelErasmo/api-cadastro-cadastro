const atribuirProdutor = async (db, dados) => {
  const [result] = await db.execute(
    `INSERT INTO produtores_campanhas (produtor_id, tecnico_id, campanha_id) VALUES (?, ?, ?)`,
    [dados.produtor_id, dados.tecnico_id, dados.campanha_id]
  );

  const insertId = result?.insertId ?? null;

  const [linhas] = await db.execute(
    `SELECT * FROM produtores_campanhas WHERE id = ?`,
    [insertId]
  );

  return linhas[0];
};

const transferirProdutor = async (db, { produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id }) => {
  // Verifica se o técnico novo pertence à campanha
  const [tecnicoRows] = await db.execute(
    `SELECT * FROM tecnicos WHERE id = ? AND campanha_id = ?`,
    [tecnico_novo_id, campanha_id]
  );

  if (tecnicoRows.length === 0) {
    throw new Error("O técnico novo não pertence à campanha informada.");
  }

  const [result] = await db.execute(
    `UPDATE produtores_campanhas
     SET tecnico_id = ?, data_transferencia = CURRENT_TIMESTAMP
     WHERE produtor_id = ? AND tecnico_id = ? AND campanha_id = ?`,
    [tecnico_novo_id, produtor_id, tecnico_antigo_id, campanha_id]
  );

  if (result.affectedRows === 0) {
    throw new Error("Não encontrado ou já transferido.");
  }

  // Retorna os dados completos da transferencia do produtor
  const [dadosTransferencia] = await db.execute(`
    SELECT 
      pc.id,
      p.nome AS nome_produtor,
      p.localizacao,
      t_antigo.nome AS tecnico_antigo,
      t_novo.nome AS tecnico_novo,
      c.nome AS nome_campanha,
      pc.data_transferencia
    FROM produtores_campanhas pc
    JOIN produtores p ON pc.produtor_id = p.id
    JOIN tecnicos t_novo ON pc.tecnico_id = t_novo.id
    JOIN tecnicos t_antigo ON t_antigo.id = ?
    JOIN campanhas c ON pc.campanha_id = c.id
    WHERE pc.produtor_id = ? AND pc.campanha_id = ?
  `, [tecnico_antigo_id, produtor_id, campanha_id]);

  return dadosTransferencia[0];
};

export { transferirProdutor, atribuirProdutor };
