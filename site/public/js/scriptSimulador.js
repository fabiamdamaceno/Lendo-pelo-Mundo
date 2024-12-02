var sec = 0;
var secTotal = 0;
var min = 0;
var funcaoCronometro;

var textos = 
    [
        `
        <p>
            Sobretudo não minta a si mesmo. Aquele que mente a si mesmo e escuta sua própria mentira vai ao ponto de não mais distinguir a verdade, nem em si, nem em torno de si; perde pois o respeito de si e dos outros. Não respeitando ninguém, deixa de amar; e para se ocupar, e para se distrair, na ausência de amor, entrega-se às paixões e aos gozos grosseiros; chega até a bestialidade em seus vícios, e tudo isso provém da mentira contínua a si mesmo e aos outros. Aquele que mente a si mesmo pode ser o primeiro a ofender-se
        </p>`,
        `
        <p>
            — Viver? Viver como? — perguntou a voz do espírito. — Sim, viver como vivi antes: bem, agradavelmente.
        </p>
        <p>
            — Como viveste antes, bem e agradavelmente? — perguntou a voz. E ele começou a examinar na imaginação os melhores momentos da sua vida agradável. Mas, fato estranho, todos estes momentos melhores de uma vida agradável pareciam agora completamente diversos do que pareceram então. Tudo, exceto as primeiras recordações da infância. Lá, na infância, existia algo realmente agradável, e com que se poderia viver, se aquilo voltasse. Mas não existia mais o homem que tivera aquela experiência agradável: era como que a recordação sobre alguma outra pessoa.'
        </p>
        `,
        `
            Foi então que entendeu as borboletas amarelas que precediam as aparições de Maurício Babilônia. Vira-as antes, sobretudo na oficina mecânica, e pensara que estavam fascinadas pelo cheiro da pintura. Alguma vez tê-las-ia sentido voejar sobre a sua cabeça na penumbra do cinema. Mas quando Mauricio Babilônia começou a persegui-la como um espectro que só ela identificava na multidão, compreendeu que as borboletas amarelas tinham alguma coisa que ver com ele. Mauricio Babilônia estava sempre na plateia dos concertos, no cinema, na missa, e ela não necessitava vê-lo para descobri-lo, porque o indicavam as borboletas.
        `,
    ]

function cronometro() {
    sec++;
    secTotal++;
    
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
    var textoAleatorio = parseInt(Math.random() * 3);

    clearInterval(funcaoCronometro);

    sec = 0;
    secTotal = 0;
    simuladorTexto.innerHTML= textos[textoAleatorio];
    div_msgResultado1.innerHTML = '';
    div_msgResultado2.innerHTML = '';
    funcaoCronometro = setInterval(cronometro, 1000);
};

function terminar() {
    if(secTotal < 1) {
        alert('Primeiro inicie a simulação')
    } else {
        clearInterval(funcaoCronometro);
        
        calcular(secTotal)
    }
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
            Você levou <b>${secTotal}</b> segundos para ler 100 palavras.
        </p>
        <p>
            Logo, sua velocidade de leitura é de <b>${(velocidade).toFixed(2)}</b> Palavras por Minuto (PPM).
        </p>
        <p>
            Lendo apenas 15 minutos por dia, você poderia ler <b>${parseInt(livrosAno, 0)}</b> livros num ano.
        </p>
        <br>
        <p>
        Ou seja, você poderia:

        </p>
        <div class="listinha">
        <p>
            Conhecer <b>${parseInt(livrosAno, 0)}</b> novas culturas;
        </p>
        <p>
            Se tornar especialista em <b>${(parseInt(livrosAno / 3))}</b> novos assuntos (The Three Book Rule);
        </p>
        <p>
            Ler <b>${porcUsuario.toFixed(2)}%</b> a mais que o brasileiro médio.
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
            The Three Book Rule dita que ler 3 livros de um mesmo assunto o torna um especialista, por passar a saber mais que 99% da população sobre isso.
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