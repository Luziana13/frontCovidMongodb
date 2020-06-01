const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.pessoa = require("./pessoa.models")(mongoose);
db.denuncia = require("./denuncia.models")(mongoose);
db.resposta = require("./resposta.models")(mongoose);

module.exports = db;