var citacao = [];
var idUsuario = sessionStorage.ID_USUARIO;

function gerarLeituras() {


    fetch(`/leituras/listar/${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                alert("Nenhum resultado encontrado.")
                throw "Nenhum resultado encontrado!!";
            }



            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var msg = "";


                for (var i = 0; i < resposta.length; i++) {
                    var tituloIndex = resposta[i].titulo;
                    var autorIndex = resposta[i].autor;
                    var paisIndex = resposta[i].paisAutor;
                    var genLiterarioIndex = resposta[i].genLiterario;
                    var dataIndex = resposta[i].dataLeitura;

                    // tratamento do formato da data

                    var dataIndexExclusão = dataIndex.split('T');
                    dataIndexReduzida = `${dataIndexExclusão[0]}`

                    var dataIndexParte = dataIndexReduzida.split('-');
                    dataIndexFormatada = `${dataIndexParte[2]}/${dataIndexParte[1]}/${dataIndexParte[0]}`;

                    msg += 
                        `
                            <tr>
                                <td>${i + 1}</td>
                                <td>${tituloIndex}</td>
                                <td>${autorIndex}</td>
                                <td>${paisIndex}</td>
                                <td>${genLiterarioIndex}</td>
                                <td>${dataIndexFormatada}</td>
                                <td><button onclick="verCitacao(${i})">Ver</button> </td>
                            </tr>
                        `;

                        citacao.push(`${resposta[i].citacaoPreferida}`)
                
                    }
                    painelLeituras.innerHTML = msg;

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function verCitacao(ID) {
    alert(citacao[ID]);
};


function adicionarLeitura() {
    var titulo = ipt_titulo.value;
    // var rating = Number(ipt_rating.value);
    var autor = ipt_autor.value;
    var genAutor = ipt_genAutor.value;
    var pais = ipt_pais.value;
    var genLiterario = ipt_genLiterario.value;
    var data = ipt_data.value;
    var citacaoPreferida = ipt_citacaoPreferida.value;
    
    if(genAutor == '#') {
        alert('Insira o Gênero do autor');
    } else if(titulo == undefined) {
        alert('Insira o titulo');
    } else if(autor == undefined) {
        alert('Insira o autor');
    } else if(pais == undefined) {
        alert('Insira o país');
    } else if(genLiterario == undefined) {
        alert('Insira o Genêro Literário');
    } else if(data == undefined) {
        alert('Insira a data');
    } else {

    fetch(`/leituras/cadastrar/${idUsuario}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tituloServer: titulo,
            autorServer: autor,
            genAutorServer: genAutor,
            paisServer: pais,
            genLiterarioServer: genLiterario,
            dataServer: data,
            citacaoPreferidaServer: citacaoPreferida
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert('Inserido com sucesso')

            } else {
                throw "Houve um erro ao tentar realizar a inserção!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
    }
};

function mudarPainel(paginaAtual) {
    var leituras = document.getElementById("leituras");
    var adicionarLeitura = document.getElementById("adicionarLeitura");

    if (paginaAtual == 'leituras') {
        leituras.style.display = 'none';
        adicionarLeitura.style.display = 'flex';
    }

    if (paginaAtual == 'adicionarLeitura') {
        leituras.style.display = 'block';
        adicionarLeitura.style.display = 'none';
    }
}

function verificarLogin() {
    console.log(sessionStorage.EMAIL_USUARIO)

    if (sessionStorage.EMAIL_USUARIO == undefined) {
        a_leituras.style.color = "gray";
        a_dashboard.style.color = "gray";

        a_leituras.href = "login.html";
        a_dashboard.href = "login.html";

    } else {
        a_leituras.href = "leituras.html";
        a_dashboard.href = "dashboard.html";

        a_login.style.color = "gray";
        a_cadastrar.style.color = "gray";
    }
}


gerarLeituras();