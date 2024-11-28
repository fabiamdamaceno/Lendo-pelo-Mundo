var sec = 0;
var funcaoCronometro;

function cronometro() {
    sec++;
    div_msgTempo.innerHTML = `${sec}`;
}

function comecar() {
    sec = 0;
    div_msgTempo.innerHTML = `${sec}`;
    simuladorTexto.style.display = 'block'
    funcaoCronometro = setInterval(cronometro, 1000);
};

function terminar() {
    clearInterval(funcaoCronometro);

    calcular(sec)
};

function calcular(tempo) {
    var minutos = tempo/60;

    // A quantidade de palavras está mocado, mas poderia ser um parametro que variaria com o texto aleatorio selecionado para a leitura
    var velocidade = 100/minutos;
    var palavrasAno = velocidade * 15 * 365;
    var livrosAno = palavrasAno / (300 * 200);

    var mediaBrasileiro = 2.73;
    var porcUsuario = ((livrosAno/mediaBrasileiro) - 1) * 100;


    // O tempo lido poderia variar se a pessoa leu em mais de 1 minuto
    div_msgResultado1.innerHTML = `
        Você levou ${sec} segundos para ler 100 palavras. <br>
        Logo, sua velocidade de leitura é de ${velocidade} Palavras por Minuto (PPM). <br>
        <br>
        Lendo apenas 15 minutos por dia, você leria ${parseInt(livrosAno, 0)} livros num ano. <br>
        <br>
        Ou seja, você poderia: <br>
        Conhecer ${parseInt(livrosAno, 0)} novas culturas; <br>
        Se tornar especialista em ${(parseInt(livrosAno / 3))} novos assuntos (The Three Book Rule); <br>
        Ler ${porcUsuario.toFixed(2)}% a mais que o brasileiro médio. <br>
        <br>
    `;

    div_msgResultado2.innerHTML = `
        Considerando que em média: <br>
            Uma página comtém 300 palavras e <br>
            Um livro contém 200 páginas. <br>
    `;
};

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