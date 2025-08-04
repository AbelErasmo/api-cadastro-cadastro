import mysql from 'mysql2';

const dbConnection = () => {

/**
 * As variaveis como host, user, password, database, 
 * seriao definidas no .env para evitar exposicao e dados sensiveis
 */
    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "empresa",
        port: 3306
    });
    
    conexao.connect((err) => {
        if(err) {
            console.log("Falha ao estabelecer a conexao com a base de dados", err);
        }
        console.log("Conexao a base de dados estabelecida com sucesso");
    });

    return conexao;
}

 export default dbConnection;