CREATE DATABASE db_teste;

USE db_teste;

CREATE TABLE IF NOT EXISTS empresas ( 
    id SERIAL PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    cnpj VARCHAR(20) NOT NULL UNIQUE, 
    telefone VARCHAR(15), 
    email VARCHAR(100) 
);

CREATE TABLE IF NOT EXISTS campanhas ( 
    id SERIAL PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    empresa_id INTEGER REFERENCES empresas(id), 
    data_inicio DATE NOT NULL, 
    data_fim DATE 
);

CREATE TABLE IF NOT EXISTS tecnicos ( 
    id SERIAL PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    campanha_id INTEGER REFERENCES campanhas(id) 
);

CREATE TABLE IF NOT EXISTS produtores ( 
    id SERIAL PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    localizacao VARCHAR(255) 
);

CREATE TABLE IF NOT EXISTS produtores_campanhas ( 
    id SERIAL PRIMARY KEY, 
    produtor_id INTEGER REFERENCES produtores(id), 
    campanha_id INTEGER REFERENCES campanhas(id), 
    tecnico_id INTEGER REFERENCES tecnicos(id), 
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    data_transferencia TIMESTAMP NULL
);
