import setupTestDB from "./db.test.js";
import request from 'supertest';
import app from '../index.js';

beforeEach(async () => {
  await setupTestDB();
});

describe('POST /produtores/atribuir', () => {
  it('deve atribuir um produtor a uma campanha com sucesso', async () => {
    const response = await request(app)
      .post('/produtores/atribuir')
      .send({
        produtor_id: 1,
        tecnico_id: 1,
        campanha_id: 1
      });
    expect([200, 201]).toContain(response.statusCode);
    expect(response.body).toHaveProperty('produtor_id', 1);
    expect(response.body).toHaveProperty('tecnico_id', 1);
    expect(response.body).toHaveProperty('campanha_id', 1);
  });

  it('deve retornar erro se faltar campo obrigatório', async () => {
    const response = await request(app)
      .post('/produtores/atribuir')
      .send({
        produtor_id: '',
        tecnico_id: '',
        campanha_id: ''
      });
    expect([400, 422]).toContain(response.statusCode);
    expect(response.body).toHaveProperty('erro');
  });
});
