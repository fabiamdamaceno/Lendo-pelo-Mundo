var leiturasModel = require("../models/leiturasModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var rating = req.body.ratingServer;
    var autor = req.body.autorServer;
    var genAutor = req.body.genAutorServer;
    var pais = req.body.paisServer;
    var genLiterario = req.body.genLiterarioServer;
    var data = req.body.dataServer;
    var citacaoPreferida = req.body.citacaoPreferidaServer;

    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Seu titulo está indefinido!");
    } else if (rating == undefined) {
        res.status(400).send("Seu rating está indefinido!");
    } else if (autor == undefined) {
        res.status(400).send("Seu autor está indefinido!");
    } else if (genAutor == undefined) {
        res.status(400).send("Seu Gênero Autor está indefinido!");
    } else if (pais == undefined) {
        res.status(400).send("Seu pais está indefinido!");
    } else if (genLiterario == undefined) {
        res.status(400).send("Seu Gênero Literário está indefinido!");
    } else if (data == undefined) {
        res.status(400).send("Sua data está indefinido!");
    } else if (citacaoPreferida == undefined) {
        res.status(400).send("Sua citacão preferida está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo leiturasModel.js
        leiturasModel.cadastrar(titulo, rating, autor, genAutor, pais, genLiterario, data, citacaoPreferida)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}