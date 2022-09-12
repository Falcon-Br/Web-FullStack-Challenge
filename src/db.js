//Cria a conexão entre o Banco de Dados e o programa
const msyql = require('mysql')

const connection = msyql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao Bando de dados: ${process.env.DB_NAME}`)
})

module.exports = connection