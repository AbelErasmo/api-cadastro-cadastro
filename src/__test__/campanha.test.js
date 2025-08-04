import request from "supertest";
import app from "../index.js";

describle('POST /api/campanhas', () => {
    it('deve cadastrar uma campanha com sucesso', async () => {
        const response = await request(app)
        .post('/api/camapnhas')
        .send({
            // Dados da campanha
        });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('nome', 'Campanha Teste');
    });

    it('deve retornar erro se faltar campo obrigatorio', async () => {
        const response = await request(app)
        .post('/api/campanhas')
        .send({
            // Atribuitos com campos vazios
        });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('erro');
    });
});