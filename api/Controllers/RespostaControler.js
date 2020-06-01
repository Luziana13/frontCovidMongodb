const db = require("../models");
const Resposta = db.resposta;

//Resposta POST
exports.create = (request, response) => {
    // Validate request
    if (!request.body.title) {
        response.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Pessoa
    const resposta = new Resposta({
        nome: request.body.nome,
        cargo: request.body.cargo,
        data: request.body.data,
        descricao: request.body.descricao,
        id_denuncia: request.body.iddenuncia

    });

    // Save Pessoa in the database
    resposta
        .save(resposta)
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

exports.findAll = (req, res) => {

    Resposta.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving resposta."
            });
        });
};
