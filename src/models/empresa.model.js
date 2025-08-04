
const criarEmpresa = async (db, dados) => {
  const result = await db.execute(
    "INSERT INTO empresas (nome, cnpj, telefone, email) VALUES (?, ?, ?, ?)",
    [dados.nome, dados.cnpj, dados.telefone, dados.email]
  );

  // mysql2 pode retornar [result, fields] ou apenas um objeto
  const insertId = result && result[0] && result[0].insertId ? result[0].insertId : null;

  return {
    id: insertId,
    ...dados
  };
};

export default criarEmpresa;
