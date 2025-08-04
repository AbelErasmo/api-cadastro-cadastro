# API Cadastro de Empresas, Campanhas, Técnicos e Produtores

Esta API foi desenvolvida para gerenciar o cadastro de empresas, campanhas, técnicos e produtores, incluindo a atribuição e transferência de produtores entre técnicos dentro de campanhas específicas.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** com **Express**
- **MySQL / MariaDB**
- **Jest** para testes automatizados

---

## 📁 Estrutura do Projeto

```
src/
├── config/              # Conexão com banco de dados
├── controllers/         # Lógica dos endpoints
├── middlewares/         # Sem nenhuma funcionalidade ainda
├── models/              # Consultas SQL
├── routes/              # Definição das rotas
├── __tests__/           # Testes de integração
```

---

## 📌 Funcionalidades

- Cadastro de empresas com validação de CNPJ e email
- Criação de campanhas vinculadas a empresas
- Cadastro de técnicos e produtores
- Atribuição de produtores a técnicos em campanhas
- Transferência de produtores entre técnicos
- Listagem de produtores por técnico
- Testes automatizados com banco de dados isolado

---

## 🧪 Testes

Os testes de integração são executados com `Jest`, utilizando um banco de dados de teste configurado em `setupTestDB`.

```bash
npm test
```

---

## 🛠️ Instalação

```bash
git clone https://github.com/AbelErasmo/api-cadastro-cadastro.git
cd api-cadastro-cadastro
npm install
```

Configure o arquivo `.env` com suas variáveis de ambiente:

```env
PORT=3000
```

---

## ▶️ Executando o Projeto no ambiente de desenvolvimento

```bash
nodemon ou npm run dev
```

## ▶️ Executando o Projeto no ambiente de produção

```bash
npm start ou npm run node
```

---

## 📬 Endpoints Principais

| Método | Rota                          | Descrição                              |
|--------|-------------------------------|----------------------------------------|
| POST   | `/empresas`                   | Cadastra uma nova empresa              |
| POST   | `/campanhas`                  | Cria uma campanha vinculada à empresa |
| POST   | `/tecnicos`                   | Cadastra um técnico                    |
| POST   | `/produtores`                 | Cadastra um produtor                   |
| POST   | `/produtores/atribuir`        | Atribui produtor a técnico             |
| PUT    | `/produtores/transferir`      | Transfere produtor entre técnicos      |
| GET    | `/tecnicos/:id/produtores`    | Lista produtores de um técnico         |

---

## 🧪 Como Testar a API

Para testar os endpoints da API pode ser feito usando  **Postman** ou via **cURL** no terminal.

### 1. Testes com Postman

- Importe um novo request no Postman.
- Configure a URL base: `http://localhost:3000`
- Use os seguintes exemplos:

#### Criar uma empresa
```http
POST /empresas
Content-Type: application/json

{
  "nome": "Empresa Teste",
  "cnpj": "12345678000199",
  "telefone": "21999999999",
  "email": "contato@empresa.com"
}
```

#### Criar uma campanha
```http
POST /campanhas
Content-Type: application/json

{
  "nome": "Campanha Safra 2025",
  "empresa_id": 1,
  "data_inicio": "2025-08-01",
  "data_fim": "2025-08-31"
}
```

#### Atribuir produtor a técnico
```http
POST /produtores/atribuir
Content-Type: application/json

{
  "produtor_id": 1,
  "tecnico_id": 1,
  "campanha_id": 1
}
```

#### Transferir produtor
```http
PUT /produtores/transferir
Content-Type: application/json

{
  "produtor_id": 1,
  "tecnico_antigo_id": 1,
  "tecnico_novo_id": 2,
  "campanha_id": 1
}
```

#### Listar produtores por técnico
```http
GET /tecnicos/1/produtores
```

---

### 2. Testes com cURL

Pode também pode usar cURL no terminal:

```bash
curl -X POST http://localhost:3000/empresas \
-H "Content-Type: application/json" \
-d '{"nome":"Empresa Teste","cnpj":"12345678000199","telefone":"21999999999","email":"contato@empresa.com"}'
```

---

### 3. Testes Automatizados

O projecto inclui também testes automatizados através de Jest:

```bash
npm test
```
Certifique-se de que a base de dados de teste está configurada correctamente e que os dados são preparados com `setupTestDB`.

---
