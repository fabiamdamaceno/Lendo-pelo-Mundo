var leituras = [
    {
        'titulo': 'Os Irmãos Karamazov',
        'autor': 'Fyodor Dostoevsky',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-05-25',
        'citacao': 'Salve o tricolor paulista'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'A Morte de Ivan Ilitch',
        'autor': 'Ivan Ilitch',
        'pais': 'Rússia',
        'genero': 'Romance',
        'data': '2024-06-10',
        'citacao': 'Amado clube brasileiro'
    },
    {
        'titulo': 'O Velho e o Mar',
        'autor': 'Ernest Hemingway',
        'pais': 'Estados Unidos',
        'genero': 'Romance',
        'data': '2024-07-02',
        'citacao': 'Tú és forte, tu és grande'
    }
]


function gerarLeituras() {
    var msg = '';
    painelLeituras.innerHTML = msg;

    var tamanhoLeituras = leituras.length;

    for (var i = 0; i < tamanhoLeituras; i++) {
        var tituloIndex = leituras[i].titulo;
        var autorIndex = leituras[i].autor;
        var paisIndex = leituras[i].pais;
        var generoIndex = leituras[i].genero;
        var dataIndex = leituras[i].data;

        // tratamento do formato da data
        var dataIndexParte = dataIndex.split('-');
        dataIndexFormatada = `${dataIndexParte[2]}/${dataIndexParte[1]}/${dataIndexParte[0]}`;

        msg += `
            <tr>
                <td>${i + 1}</td>
                <td>${tituloIndex}</td>
                <td>${autorIndex}</td>
                <td>${paisIndex}</td>
                <td>${generoIndex}</td>
                <td>${dataIndexFormatada}</td>
                <td><button onclick="verCitacao(${i})">Ver</button> </td>
            </tr>`;
    }

    painelLeituras.innerHTML = msg;
};

function verCitacao(ID) {
    alert(leituras[ID].citacao);
};

function adicionarLeitura() {
    var titulo = ipt_titulo.value;
    var rating = Number(ipt_rating.value);
    var autor = ipt_autor.value;
    var genAutor = ipt_genAutor.value;
    var pais = ipt_pais.value;
    var genLiterario = ipt_genLiterario.value;
    var data = ipt_data.value;
    var citacaoPreferida = ipt_citacaoPreferida.value;

    alert(`
            Leitura Adicionada:
            Título: ${titulo}
            Rating: ${rating}
            Autor: ${autor}
            Genêro do Autor: ${genAutor}
            País: ${pais}
            Genêro Literário: ${genLiterario}
            Data de Leitura: ${data}
            Citação Preferida: ${citacaoPreferida}
        `);

    fetch("/leituras/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tituloServer: titulo,
            ratingServer: rating,
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

gerarLeituras();

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