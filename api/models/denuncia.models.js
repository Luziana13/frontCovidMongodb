module.exports = mongoose => {
    const Denuncia = mongoose.model(
        "denuncia",
        mongoose.Schema(
            {

                vulnerabilidade: String,
                descricao: String,
                data: Date,
                periodo: String,
                respondida: String,
                latitude: String,
                longitude: String
            },
            { timestamps: true }
        )
    );

    return Denuncia;
};