var express = require("express");
var router = express.Router();

var leiturasController = require("../controllers/leiturasController");

//Recebendo os dados do html e direcionando para a função cadastrar de leiturasController.js
router.post("/cadastrar", function (req, res) {
    leiturasController.cadastrar(req, res);
})

router.get("/listar/:idUsuario", function (req, res) {
    leiturasController.listar(req, res);
})

module.exports = router;