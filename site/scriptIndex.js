
// Modificar textos
var ODSLista = [
    'TEXTO LOREM: O São Paulo Futebol Clube, fundado em 1930, é um dos maiores clubes do Brasil e reconhecido internacionalmente. Com 3 títulos da Libertadores e 3 Mundiais, é símbolo de tradição e conquistas. O Tricolor Paulista tem como casa o Estádio do Morumbi, palco de grandes momentos. Ídolos como Rogério Ceni, Raí e Telê Santana marcaram a história do clube',
    'TEXTO LOREM: A Sociedade Esportiva Palmeiras, criada em 1914, é conhecida como o Verdão ou Alviverde Imponente. Com 3 Libertadores e 11 Brasileiros, é o maior campeão nacional. Sua arena, o Allianz Parque, é referência em modernidade. Jogadores lendários como Ademir da Guia e Marcos fazem parte da rica trajetória do clube.',
    'TEXTO LOREM: O Sport Club Corinthians Paulista, fundado em 1910, é um dos clubes mais populares do Brasil. Com 2 títulos mundiais, 1 Libertadores e 7 Brasileiros, o Timão tem uma história marcada por superação e paixão. Seu estádio, a Neo Química Arena, é o caldeirão de sua fiel torcida. Nomes como Sócrates e Marcelinho Carioca são eternos na memória corinthiana.'
];

function aparecer(card) {
    cardExplicacao.innerHTML = ODSLista[card - 1];
};
