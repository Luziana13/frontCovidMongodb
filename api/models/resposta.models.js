module.exports = mongoose => {
    const Resposta = mongoose.model(
        "resposta",
        mongoose.Schema(
            {
                nome: String,
                cargo: String,
                data: Date,
                descricao: String,
                id_denuncia: String
            },
            { timestamps: true }
        )
    );

    return Resposta;
};