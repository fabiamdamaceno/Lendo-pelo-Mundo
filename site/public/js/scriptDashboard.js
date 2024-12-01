const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

// Variaveis Gráficos

var c1_mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
var c1_livrosMes;

var c2_generoAutor = ['Homem', 'Mulher'];
var livrosHomem = 0;
var livrosMulher = 0;
var c2_autorGeneroLivros;

var c3_paises;
var paisNome2;
var paisNome1;
var paisNome3;
var paisQtd2;
var paisQtd1;
var paisQtd3;
var c3_livrosPais;

var c4_generoLiterario;
var genFantasia = 0;
var genRomance = 0;
var genSuspense = 0;
var genTecnico = 0;
var genHumanidades = 0;
var c4_livroGeneroLiterario;
var c4_resultadosPesquisa;

var livrosJan = 0;
var livrosFev = 0;
var livrosMar = 0;
var livrosAbr = 0;
var livrosMaio = 0;
var livrosJun = 0;
var livrosJul = 0;
var livrosAgo = 0;
var livrosSet = 0;
var livrosOut = 0;
var livrosNov = 0;
var livrosDez = 0;
var mesMaisLidoNome = '';
var mesMaisLidoQtd = 0;
var mesQtd;

// Variaveis KPIs

var livrosLidos;
var mediaLivrosLidos;
var autorPreferido;
var genPreferido;
var paisPreferido;

// Variaveis Conquistas

var conquistas = {
    nomeConquista: [],
    descricaoConquista: []
};
var conquistasQtd = 0;



function gerarGraficos() {

    var idUsuario = sessionStorage.ID_USUARIO

    fetch(`/leituras/listar/${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                alert("Nenhum resultado encontrado.")
                throw "Nenhum resultado encontrado!!";
            }



            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var msg = "";

                // Gráfico 3 preparação

                var livrosPaisProvisorio = [];
                var paisProvisorio = [];

                for (var i = 0; i < resposta.length; i++) {
                    // var tituloIndex = resposta[i].titulo;

                    // tratamento do formato da data

                    // var dataIndexFormatada = `${dataIndexParte[2]}/${dataIndexParte[1]}/${dataIndexParte[0]}`;

                    // Gráficos

                    // Tratamento Dados Gráfico 1

                    var dataIndex = resposta[i].dataLeitura;

                    var dataIndexExclusão = dataIndex.split('T');

                    var dataIndexReduzida = `${dataIndexExclusão[0]}`
                    var dataIndexParte = dataIndexReduzida.split('-');

                    var mes = dataIndexParte[1];



                    switch (mes) {
                        case '01':
                            livrosJan++;
                            mesQtd = livrosJan;

                            break;
                        case '02':
                            livrosFev++;
                            mesQtd = livrosFev;

                            break;
                        case '03':
                            livrosMar++;
                            mesQtd = livrosMar;

                            break;
                        case '04':
                            livrosAbr++;
                            mesQtd = livrosAbr;

                            break;
                        case '05':
                            livrosMaio++;
                            mesQtd = livrosMaio;

                            break;
                        case '06':
                            livrosJun++;
                            mesQtd = livrosJun;

                            break;
                        case '07':
                            livrosJul++;
                            mesQtd = livrosJul;

                            break;
                        case '08':
                            livrosAgo++;
                            mesQtd = livrosAgo;

                            break;
                        case '09':
                            livrosSet++;
                            mesQtd = livrosSet;

                            break;
                        case '10':
                            livrosOut++;
                            mesQtd = livrosOut;

                            break;
                        case '11':
                            livrosNov++;
                            mesQtd = livrosNov;

                            break;
                        case '12':
                            livrosDez++;
                            mesQtd = livrosDez;

                            break;
                    };

                    if (mesQtd > mesMaisLidoQtd) {
                        mesMaisLidoQtd = mesQtd;
                        mesMaisLidoNome = mes;
                    };


                    // Tratamento Dados Gráfico 2
                    var genAutorIndex = resposta[i].genAutor;

                    if (genAutorIndex == 'masculino') {
                        livrosHomem++;
                    } else if (genAutorIndex == 'feminino') {
                        livrosMulher++;
                    }

                    // Tratamento Dados Gráfico 3
                    var paisIndex = resposta[i].paisAutor;
                    var paisPosicao = paisProvisorio.indexOf(paisIndex);


                    if (paisPosicao == -1) {
                        paisProvisorio.push(paisIndex);
                        livrosPaisProvisorio.push(1);

                    } else {
                        livrosPaisProvisorio[paisPosicao]++;
                    }

                    // Tratamento Dados Gráfico 4

                    var genLiterarioIndex = resposta[i].genLiterario;

                    switch (genLiterarioIndex) {
                        case 'Fantasia':
                            genFantasia++;
                            break;
                        case 'Romance':
                            genRomance++;
                            break;
                        case 'Suspense':
                            genSuspense++;
                            break;
                        case 'Técnico':
                            genTecnico++;
                            break;
                        case 'Humanidades':
                            genHumanidades++;
                            break;
                    }

                };

                c1_livrosMes = [livrosJan, livrosFev, livrosMar, livrosAbr, livrosMaio, livrosJun, livrosJul, livrosAgo, livrosSet, livrosOut, livrosNov, livrosDez, mesMaisLidoQtd*1.5];

                c2_autorGeneroLivros = [livrosHomem, livrosMulher];

                paisQtd2 = 0
                paisQtd1 = 0
                paisQtd3 = 0

                for (var i = 0; i < paisProvisorio.length; i++) {
                    var paisProvisorioAtual = paisProvisorio[i];
                    var livrosPaisProvisorioAtual = Number(livrosPaisProvisorio[i]);

                    if (livrosPaisProvisorioAtual > paisQtd1) {
                        paisQtd1 = livrosPaisProvisorioAtual;
                        paisNome1 = paisProvisorioAtual;

                    } else if (livrosPaisProvisorioAtual > paisQtd2) {
                        paisQtd2 = livrosPaisProvisorioAtual;
                        paisNome2 = paisProvisorioAtual;

                    } else if (livrosPaisProvisorioAtual > paisQtd3) {
                        paisQtd3 = livrosPaisProvisorioAtual;
                        paisNome3 = paisProvisorioAtual;

                    }

                };

                c3_livrosPais = [paisQtd2, paisQtd1, paisQtd3, paisQtd1 * 1.2];
                c3_paises = [paisNome2, paisNome1, paisNome3];

                var totalLivros = Number(resposta.length);
                var totalLivrosRadarUsuario = genFantasia + genRomance + genSuspense + genTecnico + genHumanidades;
                var genFantasiaPorc = Number((genFantasia / totalLivrosRadarUsuario) * 100);
                var genRomancePorc = Number((genRomance / totalLivrosRadarUsuario) * 100);
                var genSuspensePorc = Number((genSuspense / totalLivrosRadarUsuario) * 100);
                var genTecnicoPorc = Number((genTecnico / totalLivrosRadarUsuario) * 100);
                var genHumanidadesPorc = Number((genHumanidades / totalLivrosRadarUsuario) * 100);

                console.log(genFantasiaPorc)
                console.log(genRomancePorc)
                console.log(genSuspensePorc)
                console.log(genTecnicoPorc)
                console.log(genHumanidadesPorc)

                c4_generoLiterario = ['Fantasia', 'Romance', 'Suspense', 'Técnico', 'Humanidades'];
                c4_livroGeneroLiterario = [genFantasiaPorc, genRomancePorc, genSuspensePorc, genTecnicoPorc, genHumanidadesPorc];
                c4_resultadosPesquisa = [32.3, 23.5, 17.6, 14.7, 11.7];

                plotarGraficos()

                // KPIs

                livrosLidos = Number(totalLivros);

                mediaLivrosLidos = livrosLidos / 12;

                var autores = [];
                var qtdLivrosAutor = [];
                var qtdAutorPreferido = 0;
                var autorMaisLido;

                var generos = [];
                var qtdLivrosGenero = [];
                var qtdGeneroPreferido = 0;
                var generoMaisLido;

                for (var i = 0; i < totalLivros; i++) {
                    var autorIndex = resposta[i].autor;
                    var genIndex = resposta[i].genLiterario;
                    var posicaoAutorLista = autores.indexOf(autorIndex);
                    var posicaoGeneroLista = generos.indexOf(genIndex);

                    if (posicaoAutorLista == -1) {
                        autores.push(autorIndex);
                        qtdLivrosAutor.push(1);

                    } else {
                        qtdLivrosAutor[posicaoAutorLista]++;

                    }

                    if (qtdLivrosAutor[posicaoAutorLista] > qtdAutorPreferido) {
                        qtdAutorPreferido = qtdLivrosAutor[posicaoAutorLista]
                        autorMaisLido = autorIndex;
                    }


                    if (posicaoGeneroLista == -1) {
                        generos.push(genIndex);
                        qtdLivrosGenero.push(1);

                    } else {
                        qtdLivrosGenero[posicaoGeneroLista]++;

                    }

                    if (qtdLivrosGenero[posicaoGeneroLista] > qtdGeneroPreferido) {
                        qtdGeneroPreferido = qtdLivrosGenero[posicaoGeneroLista]
                        generoMaisLido = genIndex;
                    }


                };

                console.log(autores, qtdLivrosAutor)

                autorPreferido = autorMaisLido;


                genPreferido = generoMaisLido;

                paisPreferido = paisNome1;

                plotarKPIs();

                var listaPaisNome = [];
                var listaPaisQtd = [];

                var listaAutorNome = [];
                var listaAutorQtd = [];

                var listaGenAutorNome = [];
                var listaGenAutorQtd = [];


                for (var i = 0; i < resposta.length; i++) {
                    var paisNomeAtual = resposta[i].paisAutor;
                    var posicaoPais = listaPaisNome.indexOf(paisNomeAtual);

                    if (posicaoPais == -1) {
                        listaPaisNome.push(paisNomeAtual);
                        listaPaisQtd.push(1);

                    } else {
                        listaPaisQtd[posicaoPais]++;

                    }

                    var AutorNomeAtual = resposta[i].autor;
                    var posicaoAutor = listaAutorNome.indexOf(AutorNomeAtual);

                    if (posicaoAutor == -1) {
                        listaAutorNome.push(AutorNomeAtual);
                        listaAutorQtd.push(1);

                    } else {
                        listaAutorQtd[posicaoAutor]++;

                    }

                    var GenAutorNomeAtual = resposta[i].genAutor;
                    var posicaoGenAutor = listaGenAutorNome.indexOf(GenAutorNomeAtual);

                    if (posicaoGenAutor == -1) {
                        listaGenAutorNome.push(GenAutorNomeAtual);
                        listaGenAutorQtd.push(1);

                    } else {
                        listaGenAutorQtd[posicaoGenAutor]++;

                    }
                };


                // Validação Conquistas

                if (listaPaisQtd[listaPaisNome.indexOf('Reino Unido')] >= 3) {

                    conquistas.nomeConquista.push('Tomador de chá');
                    conquistas.descricaoConquista.push('Leia mais de 3 livros ingleses');
                    conquistasQtd++;
                };

                if (listaPaisQtd[listaPaisNome.indexOf('Estados Unidos')] >= 3) {

                    conquistas.nomeConquista.push('American');
                    conquistas.descricaoConquista.push('Leia mais de 3 livros dos Estados Unidos');
                    conquistasQtd++;
                };

                if (listaPaisQtd[listaPaisNome.indexOf('Rússia')] >= 3) {

                    conquistas.nomeConquista.push('Soviete');
                    conquistas.descricaoConquista.push('Leia mais de 3 livros russos');
                    conquistasQtd++;
                };

                if (listaPaisQtd[listaPaisNome.indexOf('Japão')] >= 1) {

                    conquistas.nomeConquista.push('Descobridor Nippon');
                    conquistas.descricaoConquista.push('Leia 1 livro japonês');
                    conquistasQtd++;
                };

                if (listaPaisQtd[listaPaisNome.indexOf('Tchéquia')] >= 1) {

                    conquistas.nomeConquista.push('Visitante de Praga');
                    conquistas.descricaoConquista.push('Leia 1 livro tcheco');
                    conquistasQtd++;
                };

                if (
                    (
                        listaPaisQtd[listaPaisNome.indexOf('Brasil')] +
                        listaPaisQtd[listaPaisNome.indexOf('Colômbia')] +
                        listaPaisQtd[listaPaisNome.indexOf('Uruguai')]
                    ) >= 3) {

                    conquistas.nomeConquista.push('Rapaz Latino-Americano');
                    conquistas.descricaoConquista.push('Leia mais de 3 livros latino-americanos');
                    conquistasQtd++;
                };

                if (listaAutorQtd[listaAutorNome.indexOf('J.K. Rowling')] >= 7) {

                    conquistas.nomeConquista.push('PotterHead');
                    conquistas.descricaoConquista.push('Leia a saga completa de Harry Potter');
                    conquistasQtd++;
                };

                if (listaGenAutorQtd[listaGenAutorNome.indexOf('feminino')] >= 5) {

                    conquistas.nomeConquista.push('Aliado');
                    conquistas.descricaoConquista.push('Leia mais de 5 escritos por autoras');
                    conquistasQtd++;
                };




                // 3 americanos
                // 3 ingleses
                // 1 japones
                // 1 theco - visita a praga
                // 3 mulheres
                // potterhead leia 7 livros de HP


                plotarConquistas();

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function plotarConquistas() {
    var msgPainelConquistas = "";

    for (var i = 0; i < conquistasQtd; i++) {
        var nomeConquistaAtual = conquistas.nomeConquista[i];
        var descricaoConquistaAtual = conquistas.descricaoConquista[i];

        msgPainelConquistas +=
            `
                <tr>
                    <td>${i + 1}</td>
                    <td>${nomeConquistaAtual}</td>
                    <td>${descricaoConquistaAtual}</td>
                </tr>
            `;
    }

    painelConquistas.innerHTML = msgPainelConquistas;
}

function plotarKPIs() {
    span_livrosLidos.innerHTML = livrosLidos;
    span_mediaLivrosLidos.innerHTML = (mediaLivrosLidos).toFixed(2);
    span_autorPreferido.innerHTML = autorPreferido;
    span_genPreferido.innerHTML = genPreferido;
    span_paisPreferido.innerHTML = paisPreferido;

};

function plotarGraficos() {

    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: c1_mes,
            datasets: [{
                label: 'Livros',
                data: c1_livrosMes,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Leitura Anual'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Livros Lidos'
                    }
                },
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Meses'
                    }
                }
            }
        }
    });

    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: c2_generoAutor,
            datasets: [{
                label: 'Livros Lidos',
                data: c2_autorGeneroLivros,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Gênero dos Autores Lidos'
                }
            },
        }
    });

    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: c3_paises,
            datasets: [{
                label: 'Livros livros',
                data: c3_livrosPais,
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Países Preferidos'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Livros lidos por país'
                    }
                },
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Países'
                    }
                }
            }
        }
    });

    new Chart(ctx4, {
        type: 'radar',
        data: {
            labels: c4_generoLiterario,
            datasets: [
                {
                    label: 'Suas Preferências',
                    data: c4_livroGeneroLiterario,
                    borderWidth: 2
                },
                {
                    label: 'Preferências Pesquisa',
                    data: c4_resultadosPesquisa,
                    borderWidth: 2
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Perfil do Leitor'
                }
            }
        }
    });
};




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

gerarGraficos();