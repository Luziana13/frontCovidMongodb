const db = require("../models");
const Denuncia = db.denuncia;

//Denuncia POST
exports.create = (request, response) => {
    // Validate request
    if (!request.body.title) {
        response.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Pessoa
    const denuncia = new Denuncia({
        idpessoa: request.body.idpessoa,
        vunerabilidade: request.body.vunerabilidade,
        descricaovulnerabilidade: request.body.descricaovulnerabilidade,
        data: request.body.data_,
        periodo: request.body.periodo,
        respondida: request.body.respondida,
        latitude: request.body.latitude,
        longitude: request.body.longitude

    });

    // Save Pessoa in the database
    denuncia
        .save(denuncia)
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

    Denuncia.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving denuncias."
            });
        });
};
