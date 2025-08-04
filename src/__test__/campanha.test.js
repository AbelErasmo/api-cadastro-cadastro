import setupTestDB from "./db.test.js";
import request from "supertest";
import app from "../index.js";

beforeEach(async () => {
  await setupTestDB();
});

describe('POST /campanhas', () => {
    it('deve cadastrar uma campanha com sucesso', async () => {
        const response = await request(app)
        .post('/campanhas')
        .send({
            nome: 'Campanha Teste',
            empresa_id: 1,
            data_inicio: '2025-08-04',
            data_fim: '2025-08-10'
        });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('nome', 'Campanha Teste');
    });

    it('deve retornar erro se faltar campo obrigatorio', async () => {
        const response = await request(app)
        .post('/campanhas')
        .send({
            nome: '',
            empresa_id: '',
            data_inicio: '',
            data_fim: ''
        });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('erro');
    });
});