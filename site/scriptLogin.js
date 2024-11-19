function visualizarSenha() {

    if(ipt_senha.type == 'text') {
        ipt_senha.type = 'password';

        btn_senha.innerHTML = '👁️‍🗨️';

    } else {
        ipt_senha.type = 'text';

        btn_senha.innerHTML = '👁️';
    };
    
};

function recuperarSenha() {
    alert('Funcionalidade em construção!');
};

function entrar() {
    // Dados mocados que num futuro próximo serão validados no Banco de Dados
    var emailMocado = 'fabiam.damaceno@gmail.com';
    var senhaMocado = 'L@pis123'

    var email = ipt_email.value;
    var senha = ipt_senha.value;

    // Validação seria feita atráves do backend e banco de dados
    var validacaoLogin;
    if(email == emailMocado && senha == senhaMocado) {
        validacaoLogin = true;
    } else {
        validacaoLogin = false;
    }

    if(validacaoLogin) {
        alert('Login realizado com sucesso')
    } else {
        alert('Alguma informação está incorreta')
    };

}