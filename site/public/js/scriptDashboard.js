const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

var qtdLivros = ['0', '1', '2 - 4', '5 - 9', '10 ou mais'];
var qtdPessoas = [12, 19, 3, 5, 2, 3];

var c1_mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
var c1_livrosMes = [1, 3, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4]

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
    type: 'bar',
    data: {
        labels: qtdLivros,
        datasets: [{
            label: 'Quantidade de pessoas',
            data: qtdPessoas,
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

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: qtdLivros,
        datasets: [{
            label: 'Quantidade de pessoas',
            data: qtdPessoas,
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
    type: 'bar',
    data: {
        labels: qtdLivros,
        datasets: [{
            label: 'Quantidade de pessoas',
            data: qtdPessoas,
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