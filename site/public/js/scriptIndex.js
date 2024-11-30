
// Modificar textos
var ODSLista = [
    'TEXTO LOREM: O São Paulo Futebol Clube, fundado em 1930, é um dos maiores clubes do Brasil e reconhecido internacionalmente. Com 3 títulos da Libertadores e 3 Mundiais, é símbolo de tradição e conquistas. O Tricolor Paulista tem como casa o Estádio do Morumbi, palco de grandes momentos. Ídolos como Rogério Ceni, Raí e Telê Santana marcaram a história do clube',
    'TEXTO LOREM: A Sociedade Esportiva Palmeiras, criada em 1914, é conhecida como o Verdão ou Alviverde Imponente. Com 3 Libertadores e 11 Brasileiros, é o maior campeão nacional. Sua arena, o Allianz Parque, é referência em modernidade. Jogadores lendários como Ademir da Guia e Marcos fazem parte da rica trajetória do clube.',
    'TEXTO LOREM: O Sport Club Corinthians Paulista, fundado em 1910, é um dos clubes mais populares do Brasil. Com 2 títulos mundiais, 1 Libertadores e 7 Brasileiros, o Timão tem uma história marcada por superação e paixão. Seu estádio, a Neo Química Arena, é o caldeirão de sua fiel torcida. Nomes como Sócrates e Marcelinho Carioca são eternos na memória corinthiana.'
];

var livroLista = [
    `
        <h3>Dom Quixote</h3>
        <br>
        <b>Enredo:</b> <br>
        <p>
            Dom Quixote, com seu escudeiro Sancho Pança, sai em busca de aventuras e almeja se consagrar um cavaleiro ao nível dos livros de romances. Acaba confundindo a realidade e a fantasia, por ter lido diversos livros idealizadores.
        <p>
        <br>
        <b>Minha experiência:</b> <br>
        <p>
            Um presente do meu pai, o li quando tinha 10 anos, foi o livro que me chamou à literatura. A complexidade, a análise dos comportamentos humanos e, principalmente, a leitura que o livro fazia de mim, me fizeram me apaixonar por esse universo. E, assim, a leitura desse livro, um presente despretensioso que recebi, moldou a minha trajetória e como eu sou.
        </p>
        <p>
            Me ensinou a valorizar a sinceridade de coração mas também a ter os pés no chão ao ser ambicioso.
        </p>
        <p>
            Valor: <b>Sinceridade de coração </b>
        </p>
    `,
    `
        <h3>Crime e Castigo</h3>
        <br>
        <b>Enredo:</b> <br>
        <p>
            O protagonista, Raskólnikov, é um jovem estudante consideravelmente bem inteligente e, em mesma proporção, desafortunado. Essa combinação de características fomenta nele um sentimento de injustiça, e ele então planeja resolver essa injustiça.
        <p>
        <br>
        <b>Minha experiência:</b> <br>
        <p>
            Foi o livro que fez eu me apaixonar pela literatura clássica. Vi que livros que aparentavam ser assustadores de ler, complexos e erutidos, não eram tão amedrontadores assim.
        </p>
        <p>
            A leitura desde livro me mostrou o perigo de se vitimizar, pois ao se considerar uma vítima da vida, Raskólnikov apela e comete ações atrozes e afetam profundamente as pessoas ao seu redor e o seu próprio ser. Ou seja, ensina um pouco sobre o perigo da soberba da inteligência.
        </p>
        <p>
            Valor: <b>Ambição</b>
        </p>
    `,
    `
        <h3>12 Regras para a Vida</h3>
        <br>
        <b>Enredo:</b> <br>
        <p>
            É um de livro não narrativo. É um manual de 12 regras simples e importantes - como a regra de não mentir - de como devemos nos conduzir na vida.
        <p>
        <p>
            E o autor justifica essas regras nos mais variados argumentos: estudos psicológicos, estudos evolutivos, citações bíblicas, citações da literatura clássica e experiências pessoais.
        <p>
        <br>
        <b>Minha experiência:</b> <br>
        <p>
             O autor é um psicólogo que eu muito admiro, por ser bem inteligente mas principalmente pela sua compostura. É um homem calmo, corajoso, assertivo e confiável. E esse é o homem que quero ser. Uma pessoa resistente e corajosa, que no meio da tempestade é um pilar de sustentação para as pessoas ao seu redor e não cede nos próprios princípios.
        </p>
        <p>
            Valor: <b>Seriedade</b>
        </p>
    `,
    `
        <h3>Cartas de um diabo a seu Aprendiz</h3>
        <br>
        <b>Enredo:</b> <br>
        <p>
            É uma coleção de cartas de um demônio a um demônio menor, as quais ensinam este a desvirtuar um homem. Assim através dessas cartas e do que não não deve ser feito, o leitor cristão - o qual é o público-alvo do livro - aprende um pouco mais como não se desvirtuar do caminho do Deus.
        <p>
        <br>
        <b>Minha experiência:</b> <br>
        <p>
            É o meu livro cristão favorito. Li quando eu ainda tava em dúvida sobre a minha religiosidade, e esse livro de maneira lúdica e genial endereçou diversas das minhas incertezas sobre ser cristão e me levou mais adiante nessa jornada. E hoje seguir a Cristo é a minha lei.
        </p>
        <p>
            Valor: <b>Caridade</b>
        </p>
    `,
];

function aparecerCard(card) {
    cardExplicacao.innerHTML = ODSLista[card - 1];
};

function aparecerTextoLivro(livro) {
    textoLivro.innerHTML = livroLista[livro - 1];
}

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