let produto = {
    nome: document.getElementById("nome-produto"),
    quantidade: document.getElementById("quantidade"),
    preco: document.getElementById("preco")
}

let info = {
    total: document.getElementsByTagName("h2")[0],
    desconto: document.getElementsByTagName("h2")[1],
    totalPagar: document.getElementsByTagName("h2")[2],
}

let botao = document.getElementById("calcular");

botao.addEventListener("click", calcular);

function calcular() {
    let nome = produto.nome.value;
    let quantidade = Number(produto.quantidade.value);
    let preco = Number(produto.preco.value);
    let totalPagar = desconto = descontoAplicado = total = 0;

    total = quantidade * preco;

    if (quantidade <= 5) {
        desconto = 0.2;
    } else if (quantidade > 5 && quantidade <= 10) {
        desconto = 0.3;
    } else {
        desconto = 0.5;
    }

    descontoAplicado = desconto * total;

    totalPagar = total - descontoAplicado;

    info.desconto.innerText = `Desconto: ${desconto}%`;
    info.total.innerText = `Total sem desconto: R$${total}`;
    info.totalPagar.innerText = `Total a pagar: ${totalPagar}`;
}