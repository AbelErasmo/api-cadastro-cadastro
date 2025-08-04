const criarTecnico = async (db, dados) => {
  const result = await db.execute(
    `INSERT INTO tecnicos (nome, campanha_id) VALUES (?, ?)`,
    [dados.nome, dados.campanha_id]
  );

  const insertId =
    result && result[0] && result[0].insertId ? result[0].insertId : null;

  return {
    id: insertId,
    ...dados,
  };
};

const listarProdutoresPorTecnico = async (db, tecnicoId) => {
  const [rows] = await db.execute(
    `SELECT p.id, p.nome, p.localizacao
     FROM produtores_campanhas pc
     JOIN produtores p ON pc.produtor_id = p.id
     WHERE pc.tecnico_id = ?`,
    [tecnicoId]
  );
  return rows;
};

export { criarTecnico, listarProdutoresPorTecnico };
