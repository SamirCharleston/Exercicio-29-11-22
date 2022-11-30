let conta = {
    numeroConta: document.getElementById("numero_conta"),
    saldo: document.getElementById("saldo"),
    debito: document.getElementById("debito"),
    credito: document.getElementById("credito"),
    botao: document.getElementById("enviar")
}

conta.botao.addEventListener("click", calcular);

function calcular() {
    let infos = {
        titulo: document.getElementsByTagName("h2")[0],
        saldo: document.getElementsByTagName("h3")[0],
        mensagem: ""
    }
    let numeroDaConta = saldo = debito = credito = saldoAtual = 0;

    numeroDaConta = Number(conta.numeroConta.value);
    saldo = Number(conta.saldo.value);
    debito = Number(conta.debito.value);
    credito = Number(conta.credito.value);

    saldoAtual = saldo - debito + credito;

    if (saldoAtual >= 0) {
        infos.mensagem = "Saldo Positivo";
    } else {
        infos.mensagem = "Saldo Negativo";
    }

    infos.titulo.innerText = `Saldo: R$${saldoAtual}`;


    infos.saldo.innerText = infos.mensagem;
}