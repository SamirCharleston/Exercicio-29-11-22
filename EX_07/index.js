const formulario = document.getElementsByTagName("form")[0];
const tabela = document.getElementById("tabela");

const campos = {
    nome: document.getElementById("nome"),
    filhos: document.getElementById("filhos"),
    salario: document.getElementById("salario"),
    adicionar: document.getElementById("adicionar")
};

const dadosLista = [{
    nome: "Ada Lovelace",
    filhos: 1,
    salario: 150.0
}, {
    nome: "Grace Hopper",
    filhos: 2,
    salario: 150.0
}, {
    nome: "Margaret Hamilton",
    filhos: 3,
    salario: 150.0
}, {
    nome: "Joan Clark",
    filhos: 4,
    salario: 150.0
}];

lerDados();

campos.adicionar.addEventListener("click", adicionarDados);


function adicionarDados() {
    const regex = /[^a-z \s]/i;

    let dadosLidos = {
        nome: "",
        filhos: 0,
        salario: 0
    }

    let validacaoNome = validacaoSalarioFilho = somenteLetras = false;

    dadosLidos.nome = campos.nome.value;
    dadosLidos.filhos = Number(campos.filhos.value);
    dadosLidos.salario = Number(campos.salario.value);

    somenteLetras = regex.test(dadosLidos.nome);

    if (dadosLidos.nome !== "" && !somenteLetras) {
        validacaoNome = true;
    } else {
        alert("Digite o nome, sem numeros ou caracteres especiais.");
    }

    if (dadosLidos.filhos >= 0 && dadosLidos.salario >= 0) {
        validacaoSalarioFilho = true;
    } else {
        alert("Preencha os campos Num. Filhos e Salário com valores válidos.");
    }

    if (validacaoNome && validacaoSalarioFilho) {
        let linha = document.createElement("tr");
        tabela.appendChild(linha);

        dadosLidos.salario = dadosLidos.salario.toFixed(1);
        linha.innerHTML = ` <td>${dadosLidos.nome}</td>
                            <td>${dadosLidos.filhos}</td>
                            <td>R$ ${dadosLidos.salario}</td>`

        dadosLista.push(dadosLidos);
    }

    formulario.reset();
}

function lerDados() {
    const listaElementosTr = [];

    for (i in dadosLista) {

        listaElementosTr[i] = document.createElement("tr");
        tabela.appendChild(listaElementosTr[i]);

        dadosLista[i].salario = dadosLista[i].salario.toFixed(1);

        listaElementosTr[i].innerHTML = `  <td>${dadosLista[i].nome}</td>
                                            <td>${dadosLista[i].filhos}</td>
                                            <td>R$ ${dadosLista[i].salario}</td>`
    }
}