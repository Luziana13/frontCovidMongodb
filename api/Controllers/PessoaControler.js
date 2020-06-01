const db = require("../models");
const Pessoa = db.pessoa;

//Pessoa POST
exports.create = (request, response) => {
    // Validate request
    if (!request.body.title) {
        response.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Pessoa
    const pessoa = new Pessoa({
        nome: request.body.nome,
        email: request.body.email,
        idade: request.body.idade,
        sexo: request.body.sexo,
        cor: request.body.cor,
        escolaridade: request.body.escolaridade,
        categoriaprof: request.body.categoriaprof,
        renda: request.body.renda,
        sintomas: request.body.sintomas,
        diagnostico: request.body.diagnostico,
        contatocom: request.body.contatocom
    });

    // Save Pessoa in the database
    pessoa
        .save(pessoa)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });

        });
};