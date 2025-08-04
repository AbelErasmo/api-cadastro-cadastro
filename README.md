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
