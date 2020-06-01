module.exports = mongoose => {
    const Pessoa = mongoose.model(
        "pessoa",
        mongoose.Schema(
            {
                nome: String,
                email: String,
                idade: String,
                sexo: String,
                cor: String,
                escolaridade: String,
                categoriaprof: String,
                renda: String,
                sintomas: String,
                diagnostico: String,
                contatocom: String
            },
            { timestamps: true }
        )
    );

    return Pessoa;
};