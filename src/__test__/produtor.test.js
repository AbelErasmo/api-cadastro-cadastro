import setupTestDB from "./db.test.js";
import request from 'supertest';
import app from '../index.js';

beforeEach(async () => {
  await setupTestDB();
});

describe('POST /produtores', () => {
  it('deve cadastrar um produtor com sucesso', async () => {
    const response = await request(app)
      .post('/produtores')
      .send({
        nome: 'Produtor Teste',
        localizacao: 'Boane'
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('nome', 'Produtor Teste');
  });

  it('deve retornar erro se faltar campo obrigatório', async () => {
    const response = await request(app)
      .post('/produtores')
      .send({
        nome: '',
        localizacao: ''
      });
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('erro');
  });
});
