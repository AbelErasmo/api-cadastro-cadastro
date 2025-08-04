import dbConnection from '../config/db_connection.js';
import setupTestDB from './db.test.js';

export default async function testDBSetup() {
  const db = await dbConnection();

  await db.execute('DELETE FROM produtores_campanhas');
  await db.execute('DELETE FROM produtores');
  await db.execute('DELETE FROM tecnicos');
  await db.execute('DELETE FROM campanhas');

  const campanhaResult = await db.execute(
    "INSERT INTO campanhas (nome, empresa_id, data_inicio, data_fim) VALUES (?, ?, ?, ?)",
    ['Campanha Teste', 1, '2025-08-01', '2025-08-31']
  );
  const campanha_id = campanhaResult && campanhaResult[0] && campanhaResult[0].insertId ? campanhaResult[0].insertId : null;

  const tecnico1Result = await db.execute(
    "INSERT INTO tecnicos (nome, campanha_id) VALUES (?, ?)",
    ['Técnico 1', campanha_id]
  );
  const tecnico1_id = tecnico1Result.insertId;

  const tecnico2Result = await db.execute(
    "INSERT INTO tecnicos (nome, campanha_id) VALUES (?, ?)",
    ['Técnico 2', campanha_id]
  );
  const tecnico2_id = tecnico2Result.insertId;

  const produtorResult = await db.execute(
    "INSERT INTO produtores (nome, localizacao) VALUES (?, ?)",
    ['Produtor 1', 'Teste']
  );
  const produtor_id = produtorResult.insertId;

  // Relacionamento inicial para transferência
  await db.execute(
    "INSERT INTO produtores_campanhas (produtor_id, tecnico_id, campanha_id) VALUES (?, ?, ?)",
    [produtor_id, tecnico1_id, campanha_id]
  );

  return { produtor_id, tecnico1_id, tecnico2_id, campanha_id };
}

let ids;
beforeEach(async () => {
  ids = await setupTestDB();
});