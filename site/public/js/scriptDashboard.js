const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

var qtdLivros = ['0', '1', '2 - 4', '5 - 9', '10 ou mais'];
var qtdPessoas = [12, 19, 3, 5, 2, 3];

var c1_mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
var c1_livrosMes = [1, 3, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4]

var c2_generoAutor = ['Homem', 'Mulher'];
var c2_autorGeneroLivros = [12, 4];

var c3_paises = ['Estados Unidos', 'Rússia', 'Inglaterra'];
var c3_livrosPais = [3, 8, 2, 12];

var c4_generoLiterario = ['Fantasia', 'Romance', 'Suspense', 'Técnico', 'Humanidades'];
var c4_livroGeneroLiterario = [3, 7, 1, 2, 3];

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
            label: 'Quantidade de pessoas',
            data: c3_livrosPais,
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Leitura em 2023'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade de Pessoas'
                }
            },
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade de livros'
                }
            }
        }
    }
});

new Chart(ctx4, {
    // const config = {
    //     type: 'radar',
    //     data: data,
    //     options: {
    //       elements: {
    //         line: {
    //           borderWidth: 3
    //         }
    //       }
    //     },
    //   };
    //   const data = {
    //     labels: [
    //       'Eating',
    //       'Drinking',
    //       'Sleeping',
    //       'Designing',
    //       'Coding',
    //       'Cycling',
    //       'Running'
    //     ],
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [65, 59, 90, 81, 56, 55, 40],
    //       fill: true,
    //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //       borderColor: 'rgb(255, 99, 132)',
    //       pointBackgroundColor: 'rgb(255, 99, 132)',
    //       pointBorderColor: '#fff',
    //       pointHoverBackgroundColor: '#fff',
    //       pointHoverBorderColor: 'rgb(255, 99, 132)'
    //     }, {
    //       label: 'My Second Dataset',
    //       data: [28, 48, 40, 19, 96, 27, 100],
    //       fill: true,
    //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //       borderColor: 'rgb(54, 162, 235)',
    //       pointBackgroundColor: 'rgb(54, 162, 235)',
    //       pointBorderColor: '#fff',
    //       pointHoverBackgroundColor: '#fff',
    //       pointHoverBorderColor: 'rgb(54, 162, 235)'
    //     }]
    //   };
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

function verificarLogin() {
    console.log(sessionStorage.EMAIL_USUARIO)

    if(sessionStorage.EMAIL_USUARIO == undefined) {
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