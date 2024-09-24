const express = require('express');
const bodyParser = require('body-parser');
const dao = require('./dao');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); 


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/cadastrar', (req, res) => {
    dao.gravarAluno(req.body, (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao cadastrar aluno.');
        }
        res.send({ message: 'Aluno cadastrado com sucesso!' });
    });
});


app.put('/atualizar/:id', (req, res) => {
    const id = req.params.id;
    dao.atualizarAluno(id, req.body, (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao atualizar aluno.');
        }
        res.send({ message: 'Aluno atualizado com sucesso!' });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
