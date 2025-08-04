import request from 'supertest';
import app from '../index.js';

describe('POST /api/empresa', () => {
  it('deve cadastrar uma empresa com sucesso', async () => {
    const response = await request(app)
      .post('/api/empresa')
      .send({
        nome: 'Empresa Teste',
        cnpj: '12345678000199',
        telefone: '11999999999',
        email: 'tester@empresa.com'
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('nome', 'Empresa Teste');
  });

  it('deve retornar erro se faltar campo obrigatório', async () => {
    const response = await request(app)
      .post('/api/empresa')
      .send({
        nome: '',
        cnpj: '',
        telefone: '',
        email: ''
      });
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('erro');
  });
});