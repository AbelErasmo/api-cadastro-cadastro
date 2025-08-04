import setupTestDB from "./db.test.js";
import request from 'supertest';
import app from '../index.js';

beforeEach(async () => {
  await setupTestDB();
});

describe('PUT /produtores/tranferir', () => {
  it('deve transferir um produtor de técnico com sucesso', async () => {
    const response = await request(app)
      .put('/produtores/tranferir')
      .send({
        produtor_id: 1,
        tecnico_antigo_id: 1,
        tecnico_novo_id: 2,
        campanha_id: 1
      });
    expect([200, 201]).toContain(response.statusCode);
    expect(response.body).toHaveProperty('produtor_id', 1);
    expect(response.body).toHaveProperty('tecnico_antigo_id', 1);
    expect(response.body).toHaveProperty('tecnico_novo_id', 2);
    expect(response.body).toHaveProperty('campanha_id', 1);
  });

  it('deve retornar erro se faltar campo obrigatório', async () => {
    const response = await request(app)
      .put('/produtores/tranferir')
      .send({
        produtor_id: '',
        tecnico_antigo_id: '',
        tecnico_novo_id: '',
        campanha_id: ''
      });
    expect([400, 422]).toContain(response.statusCode);
    expect(response.body).toHaveProperty('erro');
  });
});
