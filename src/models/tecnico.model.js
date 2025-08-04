export const criarTecnico = async (db, dados) => {
  const result = await db.execute(
    `INSERT INTO tecnicos (nome, campanha_id) VALUES (?, ?)`,
    [dados.nome, dados.campanha_id]
  );

  const insertId = result && result[0] && result[0].insertId ? result[0].insertId : null; 

  return {
    id: insertId,
    ...dados
  };
};

export default criarTecnico;
