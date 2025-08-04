const criarProdutor = async (db, dados) => {
    const result = await db.execute(
        `INSERT INTO produtores (nome, localizacao) values(?, ?)`,
        [dados.nome, dados.localizacao]
    );
    
    const insertId = result && result[0] && result[0].insertId ? result[0].insertId : null;

    return {
        id: insertId,
        ...dados
    };
};

export default criarProdutor;