const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');



var qtdLivros = ['0', '1', '2 - 4', '5 - 9', '10 ou mais'];
var qtdPessoas = [12, 19, 3, 5, 2, 3];

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

var c4_generoLiterario = ['Fantasia', 'Romance', 'Suspense', 'Técnico', 'Humanidades'];
var c4_livroGeneroLiterario = [3, 7, 1, 2, 3];

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
                    // var autorIndex = resposta[i].autor;
                    
                    // tratamento do formato da data
                    
                    // var dataIndexFormatada = `${dataIndexParte[2]}/${dataIndexParte[1]}/${dataIndexParte[0]}`;

                    // Tratamento Dados Gráfico 1

                    var dataIndex = resposta[i].dataLeitura;

                    var dataIndexExclusão = dataIndex.split('T');
                    
                    var dataIndexReduzida = `${dataIndexExclusão[0]}`
                    var dataIndexParte = dataIndexReduzida.split('-');
                    
                    var mes = dataIndexParte[1];

                    switch (mes) {
                        case '01':
                            livrosJan++;
                            break;
                        case '02':
                            livrosFev++;
                            break;
                        case '03':
                            livrosMar++;
                            break;
                        case '04':
                            livrosAbr++;
                            break;
                        case '05':
                            livrosMaio++;
                            break;
                        case '06':
                            livrosJun++;
                            break;
                        case '07':
                            livrosJul++;
                            break;
                        case '08':
                            livrosAgo++;
                            break;
                        case '09':
                            livrosSet++;
                            break;
                        case '10':
                            livrosOut++;
                            break;
                        case '11':
                            livrosNov++;
                            break;
                        case '12':
                            livrosDez++;
                            break;
                    };

                    // Tratamento Dados Gráfico 2
                    var genAutorIndex = resposta[i].genAutor;

                    if(genAutorIndex == 'masculino') {
                        livrosHomem++;
                    } else if(genAutorIndex == 'feminino') {
                        livrosMulher++;
                    }

                    // Tratamento Dados Gráfico 3
                    var paisIndex = resposta[i].paisAutor;
                    var paisPosicao = paisProvisorio.indexOf(paisIndex);


                    if(paisPosicao == -1) {
                        paisProvisorio.push(paisIndex);
                        livrosPaisProvisorio.push(1);

                    } else {
                        livrosPaisProvisorio[paisPosicao]++;
                    }
                    
                    // Tratamento Dados Gráfico 4


                    var genLiterarioIndex = resposta[i].genLiterario;

                    
                    


                };

                c1_livrosMes = [livrosJan, livrosFev, livrosMar, livrosAbr, livrosMaio, livrosJun, livrosJul, livrosAgo, livrosSet, livrosOut, livrosNov, livrosDez];

                c2_autorGeneroLivros = [livrosHomem, livrosMulher];

                paisQtd2 = 0
                paisQtd1 = 0
                paisQtd3 = 0

                for(var i = 0; i < paisProvisorio.length; i++) {
                    var paisProvisorioAtual = paisProvisorio[i];
                    var livrosPaisProvisorioAtual = Number(livrosPaisProvisorio[i]);

                    if(livrosPaisProvisorioAtual > paisQtd1) {
                        paisQtd1 = livrosPaisProvisorioAtual;
                        paisNome1 = paisProvisorioAtual;
                        
                    } else if(livrosPaisProvisorioAtual > paisQtd2) {
                        paisQtd2 = livrosPaisProvisorioAtual;
                        paisNome2 = paisProvisorioAtual;
                        
                    } else if(livrosPaisProvisorioAtual > paisQtd3) {
                        paisQtd3 = livrosPaisProvisorioAtual;
                        paisNome3 = paisProvisorioAtual;
                        
                    }

                };

                c3_livrosPais = [paisQtd2, paisQtd1, paisQtd3, paisQtd1*1.5];
                c3_paises = [paisNome2, paisNome1, paisNome3];



                plotarGraficos()

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

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
            datasets: [{
                label: 'Livros por Gênero',
                data: c4_livroGeneroLiterario,
                borderWidth: 2
            }]
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