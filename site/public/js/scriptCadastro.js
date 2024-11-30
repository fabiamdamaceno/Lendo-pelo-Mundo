var cadastroPreenchido = true;
var qtdValidacoes = 0;
var qtdPreenchimento = 0;

function validarNome() {
    var nome = ipt_nome.value;
    var tamanhoNome = nome.length;

    if (nome == '') {
        ipt_nome.style.border = "2px solid red";
        qtdPreenchimento--;

    } else if (tamanhoNome < 3) {
        ipt_nome.style.border = "2px solid red";
        div_msgNome.innerHTML = "Nome deve pelo menos 3 caracteres";

    } else {
        ipt_nome.style.border = "2px solid green";
        div_msgNome.innerHTML = "";
        qtdValidacoes++;
    }
}

function validarSobrenome() {
    var sobrenome = ipt_sobrenome.value;
    var tamanhoSobrenome = sobrenome.length;

    if (sobrenome == '') {
        ipt_sobrenome.style.border = "2px solid red";
        qtdPreenchimento--;

    } else if (tamanhoSobrenome < 3) {
        ipt_sobrenome.style.border = "2px solid red";
        div_msgSobrenome.innerHTML = "Nome deve pelo menos 3 caracteres";

    } else {
        ipt_sobrenome.style.border = "2px solid green";
        div_msgSobrenome.innerHTML = "";
        qtdValidacoes++;
    };
};

function validarEmail() {
    var email = ipt_email.value;

    // Posição do @ no email
    var posicaoArroba = email.indexOf('@');

    if (email == '') {
        ipt_email.style.border = "2px solid red";
        qtdPreenchimento--;

    } else if ((posicaoArroba == -1) || (posicaoArroba > email.lastIndexOf('.com') && posicaoArroba > email.lastIndexOf('.br'))) {
        ipt_email.style.border = "2px solid red";
        div_msgEmail.innerHTML = "E-mail deve conter '@', e '.com' ou '.br";

    } else {
        ipt_email.style.border = "2px solid green";
        div_msgEmail.innerHTML = "";
        qtdValidacoes++;

    };
};

function validarSenha() {
    var senha = ipt_senha.value;
    var tamanhoSenha = senha.length;
    var senhaValidada = true;

    div_msgSenha.innerHTML = `
    Deve conter pelos menos: <br>
    <span id="span_senhaTamanho"> 8 caracteres </span> <br>
    <span id="span_senhaEspecial"> Um caractere especial (!, @, #, $) </span> <br>
    <span id="span_senhaNumero"> Um número </span> <br>
    <span id="span_senhaMaiuscula"> Uma letra maiúscula </span> <br>
    <span id="span_senhaMinuscula"> Uma letra minúscula </span> <br>
    `;

    if (senha == '') {
        ipt_senha.style.border = "2px solid red";
        qtdPreenchimento--;
        senhaValidada = false;

    } else {

        if (tamanhoSenha < 8) {
            span_senhaTamanho.style.color = "red";
            senhaValidada = false;

        } else {
            span_senhaTamanho.style.color = "green";
        };

        var especialLista = ['!', '@', '#', '$', '%', '&', '*', '?'];
        var contemEspecial = false;

        for (var i = 0; i < tamanhoSenha; i++) {
            var atualSenha = senha[i];

            if (especialLista.includes(atualSenha)) {
                contemEspecial = true;
            };
        };

        if (!contemEspecial) {
            span_senhaEspecial.style.color = "red";
            senhaValidada = false;

        } else {
            span_senhaEspecial.style.color = "green";

        };

        var listaNumero = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var contemNumero = false;

        for (var i = 0; i < tamanhoSenha; i++) {
            var atualSenha = senha[i];

            if (listaNumero.includes(atualSenha)) {
                contemNumero = true;
            };
        };

        if (!contemNumero) {
            span_senhaNumero.style.color = "red";
            senhaValidada = false;

        } else {
            span_senhaNumero.style.color = "green";

        };

        var senhaMinuscula = senha.toLowerCase();

        if (senha == senhaMinuscula) {
            ipt_senha.style.border = "2px solid red";
            span_senhaMaiuscula.style.color = "red";
            senhaValidada = false;

        } else {
            span_senhaMaiuscula.style.color = "green";

        };

        var senhaMaiuscula = senha.toUpperCase();

        if (senha == senhaMaiuscula) {
            ipt_senha.style.border = "2px solid red";
            span_senhaMinuscula.style.color = "red";
            senhaValidada = false;

        } else {
            span_senhaMinuscula.style.color = "green";

        };

    }

    if (!senhaValidada) {
        ipt_senha.style.border = "2px solid red";

    } else {
        ipt_senha.style.border = "2px solid green";
        qtdValidacoes++;
    };

};

function validarConfirmarSenha() {
    var senha = ipt_senha.value;
    var confirmarSenha = ipt_confirmarSenha.value;

    if (confirmarSenha == '') {
        ipt_confirmarSenha.style.border = "2px solid red";
        qtdPreenchimento--;

    } else if (senha != confirmarSenha) {
        ipt_confirmarSenha.style.border = "2px solid red";
        div_msgConfirmarSenha.innerHTML = "Deve ser igual a senha inserida";

    } else {
        ipt_confirmarSenha.style.border = "2px solid green";
        div_msgConfirmarSenha.innerHTML = "";
        qtdValidacoes++;
    };
};

function validarGenero() {
    var genero = ipt_genero.value;

    if (genero == '#') {
        ipt_genero.style.border = "2px solid red";
        div_msgGenero.innerHTML = "Selecione uma opção válida";

    } else {

        ipt_genero.style.border = "2px solid green";
        div_msgGenero.innerHTML = "";
        qtdValidacoes++;
    };
};

function cadastrarBanco() {
    var nomeInputado = ipt_nome.value;
    var sobrenomeInputado = ipt_sobrenome.value;
    var emailInputado = ipt_email.value;
    var senhaInputado = ipt_senha.value;
    var generoInputado = ipt_genero.value;

    var nome = nomeInputado;
    var sobrenome = sobrenomeInputado;

    nome = nome.toLowerCase();
    nome1Caractere = nome[0];
    nome1CaractereMaisculo = nome1Caractere.toUpperCase();

    sobrenome = sobrenome.toLowerCase();
    sobrenome1Caractere = sobrenome[0];
    sobrenome1CaractereMaisculo = sobrenome1Caractere.toUpperCase();

    var nomeBanco = nome.replace(`${nome1Caractere}`, `${nome1CaractereMaisculo}`);
    var sobrenomeBanco = sobrenome.replace(`${sobrenome1Caractere}`, `${sobrenome1CaractereMaisculo}`);
    var generoBanco = generoInputado;
    var emailBanco = emailInputado;
    var senhaBanco = senhaInputado;

    console.log(nomeBanco);
    console.log(sobrenomeBanco);
    console.log(generoBanco);
    console.log(emailBanco);
    console.log(senhaBanco);

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeBanco,
            sobrenomeServer: sobrenomeBanco,
            generoServer: generoBanco,
            emailServer: emailBanco,
            senhaServer: senhaBanco
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                var cardAviso = document.getElementById("div_aviso");
                cardAviso.style.display = "block";

                cardAviso.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                cardAviso.style.color = "white"

                setTimeout(() => {
                    window.location = "../login.html";
                }, "2000");

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
};

function cadastrar() {
    qtdValidacoes = 0;
    qtdPreenchimento = 5;

    validarNome();
    validarSobrenome();
    validarEmail();
    validarGenero();
    validarSenha();
    validarConfirmarSenha();


    if (!(qtdPreenchimento == 5)) {
        alert('Preencha todos os campos');
    } else {

        if (qtdValidacoes != 6) {
            alert('Preencha corretamente todos os campos')
        } else {
            cadastrarBanco();
        };
    };

};

function visualizarSenha() {

    if (ipt_senha.type == 'text') {
        ipt_senha.type = 'password';
        ipt_confirmarSenha.type = 'password';

        btn_senha.innerHTML = '👁️‍🗨️';

    } else {
        ipt_senha.type = 'text';
        ipt_confirmarSenha.type = 'text';

        btn_senha.innerHTML = '👁️';
    };

};
