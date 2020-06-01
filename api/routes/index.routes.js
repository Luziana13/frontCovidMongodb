module.exports = route => {

    const pessoa = require("../Controllers/PessoaControler");
    const denuncia = require("../Controllers/DenunciaController");
    const resposta = require("../Controllers/RespostaControler");

    var router = require("express").Router();


    // Create a new Pessoa
    router.post("/pessoa", pessoa.create);
    // Create a new denuncia
    router.post("/denuncia", denuncia.create);
    // Create a new resposta
    router.post("/resposta", resposta.create);


    // Retrieve all denucnias
    router.get("/denuncia", denuncia.findAll);
    // Retrieve all denucnias
    router.get("/resposta", resposta.findAll);


};
