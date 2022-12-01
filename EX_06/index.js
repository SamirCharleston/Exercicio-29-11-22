let formulario = document.getElementById("formulario");
let campos = {
    nome: document.getElementById("nome"),
    senha: document.getElementById("senha")
}

let botoes = {
    enviar: document.getElementById("enviar"),
    resetar: document.getElementById("reset")
}

let info = document.getElementById("info");

let usuarios = {
    nome: "1234",
    senha: "9999"
}

botoes.enviar.addEventListener("click", enviarRequisicao);
botoes.resetar.addEventListener("click", resetarCampos);

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

    info.style.display = "unset";
}

function resetarCampos() {
    info.style.display = "none";
}