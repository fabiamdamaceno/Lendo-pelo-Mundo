var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(idUsuario, titulo, autor, genAutor, pais, genLiterario, data, citacaoPreferida) {
    console.log("ACESSEI O LEITURAS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, autor, genAutor, pais, genLiterario, data, citacaoPreferida);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO leitura (fkLeituraUsuario_Usuario, titulo, autor, genAutor, paisAutor, genLiterario, dataLeitura, citacaoPreferida) VALUES ('${idUsuario}','${titulo}', '${autor}', '${genAutor}', '${pais}', '${genLiterario}', '${data}', '${citacaoPreferida}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idUsuario) {

    var instrucaoSql = `
    SELECT idLeiturausuario, titulo, rating, autor, paisAutor, genAutor, genLiterario, dataLeitura, citacaoPreferida FROM leitura WHERE fkLeituraUsuario_Usuario = ${idUsuario};
    `;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    cadastrar,
    listar
};