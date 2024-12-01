var sec = 0;
var min = 0;
var funcaoCronometro;

function cronometro() {
    sec++;
    
    var msgSec = '';
    var msgMin = '';

    if(sec < 10) {
        msgSec = `0${sec}`;
    } else if(sec < 60) {
        msgSec = `${sec}`;
    } else {
        sec = 0;
        min++
        msgSec = `0${sec}`;
    }

    if(min < 10) {
        msgMin = `0${min}`;
    }

    div_msgTempo.innerHTML = `${msgMin}:${msgSec}`;

}

function comecar() {
    sec = 0;
    simuladorTexto.style.display = 'block';
    div_msgResultado1.innerHTML = '';
    div_msgResultado2.innerHTML = '';
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
        <h3>Resultado Simulador</h3>
        <p>
            Você levou ${sec} segundos para ler 100 palavras.
        </p>
        <p>
            Logo, sua velocidade de leitura é de ${(velocidade).toFixed(2)} Palavras por Minuto (PPM).
        </p>
        <p>
            Lendo apenas 15 minutos por dia, você poderia ler ${parseInt(livrosAno, 0)} livros num ano.
        </p>
        <br>
        <p>
        Ou seja, você poderia:

        </p>
        <div class="listinha">
        <p>
            Conhecer ${parseInt(livrosAno, 0)} novas culturas;
        </p>
        <p>
            Se tornar especialista em ${(parseInt(livrosAno / 3))} novos assuntos (The Three Book Rule);
        </p>
        <p>
            Ler ${porcUsuario.toFixed(2)}% a mais que o brasileiro médio.
        </p>
        </div>
    `;

    div_msgResultado2.innerHTML = `
        <br>
        <p>
            Considerando que em média:
        </p>
        <p>
            Uma página comtém 300 palavras e um livro contém 200 páginas.
        </p>
        <p>
            The Three Book Rule dita que ler 3 livros de um mesmo assunto o torna um especialista, por passar a saber mais que 99% da popução sobre isso.
        </p>
    `;

    simuladorTexto.style.display = 'none'
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