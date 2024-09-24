const mysql2 = require('mysql2');


const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',  
    password: 'fatec123', 
    database: 'escola'
});


const gravarAluno = (aluno, callback) => {
    const query = 'INSERT INTO aluno (nome, email, telefone) VALUES (?, ?, ?)';
    connection.query(query, [aluno.nome, aluno.email, aluno.telefone], callback);
};

const atualizarAluno = (id, aluno, callback) => {
    const query = 'UPDATE aluno SET nome = ?, email = ?, telefone = ? WHERE id = ?';
    connection.query(query, [aluno.nome, aluno.email, aluno.telefone, id], callback);
};

module.exports = {
    gravarAluno,
    atualizarAluno
};
