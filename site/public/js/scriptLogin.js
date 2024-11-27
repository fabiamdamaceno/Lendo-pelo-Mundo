function visualizarSenha() {

    if (ipt_senha.type == 'text') {
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
    var email = ipt_email.value;
    var senha = ipt_senha.value;

    if (email == "" || senha == "") {
        cardAviso.style.display = "block"
        cardAviso.innerHTML = "Preencha os campos";
        return false;
    }

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "../leituras.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}