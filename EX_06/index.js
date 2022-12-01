let campos = {
    nome: document.getElementById("nome"),
    senha: document.getElementById("senha")
}

let botoes = {
    enviar: document.getElementById("enviar")
}

let info = document.getElementById("info");

let usuarios = {
    nome: "1234",
    senha: "9999"
}

botoes.enviar.addEventListener("click", enviarRequisicao);

function enviarRequisicao() {

    let nome = campos.nome.value;
    let senha = campos.senha.value;
    let nomeValido = false;

    if (nome == usuarios.nome) {
        nomeValido = true;
    } else {
        info.innerText = "Usuário Inválido"
    }

    if (senha == usuarios.senha && nomeValido) {
        info.innerText = "Acesso Permitido";
    } else if (nomeValido) {
        info.innerText = "Senha Inválida";
    }
}