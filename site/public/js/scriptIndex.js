
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
        Dom Quixote, com seu escudeiro Sancho Pança, sai em busca de aventuras e almeja se consagrar um cavaleiro ao nível dos livros de romances. Acaba confundindo a realidade e a fantasia, por ter lido diversos livros idealizadores. <br>
        <br>
        <b>Minha experiência:</b> <br>
        Um presente do meu pai, o li quando tinha 10 anos, foi o livro que me chamou à literatura. A complexidade, a análise dos comportamentos humanos e, principalmente, a leitura que o livro fazia de mim, me fizeram me apaixonar por esse universo. E, assim, a leitura desse livro, um presente despretensioso que recebi, moldou a minha trajetória e como eu sou.

    `,
    'TEXTO LOREM: A Sociedade Esportiva Palmeiras, criada em 1914, é conhecida como o Verdão ou Alviverde Imponente. Com 3 Libertadores e 11 Brasileiros, é o maior campeão nacional. Sua arena, o Allianz Parque, é referência em modernidade. Jogadores lendários como Ademir da Guia e Marcos fazem parte da rica trajetória do clube.',
    'TEXTO LOREM: O Sport Club Corinthians Paulista, fundado em 1910, é um dos clubes mais populares do Brasil. Com 2 títulos mundiais, 1 Libertadores e 7 Brasileiros, o Timão tem uma história marcada por superação e paixão. Seu estádio, a Neo Química Arena, é o caldeirão de sua fiel torcida. Nomes como Sócrates e Marcelinho Carioca são eternos na memória corinthiana.',
    'TEXTO LOREM: O Sport Club Corinthians Paulista, fundado em 1910, é um dos clubes mais populares do Brasil. Com 2 títulos mundiais, 1 Libertadores e 7 Brasileiros, o Timão tem uma história marcada por superação e paixão. Seu estádio, a Neo Química Arena, é o caldeirão de sua fiel torcida. Nomes como Sócrates e Marcelinho Carioca são eternos na memória corinthiana.'
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