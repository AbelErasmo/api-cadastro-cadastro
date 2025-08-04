import setupTestDB from "./db.test.js";
import request from 'supertest';
import app from '../index.js';

beforeEach(async () => {
  await setupTestDB();
});

describe('POST /tecnicos', () => {
  it('deve cadastrar um técnico com sucesso', async () => {
    const response = await request(app)
      .post('/tecnicos')
      .send({
        nome: 'Técnico Teste',
        campanha_id: 1
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('nome', 'Técnico Teste');
  });

  it('deve retornar erro se faltar campo obrigatório', async () => {
    const response = await request(app)
      .post('/tecnicos')
      .send({
        nome: '',
        campanha_id: ''
      });
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('erro');
  });
});
