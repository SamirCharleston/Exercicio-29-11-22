const tabela = document.getElementById("tabela");

const campos = {
    nome: document.getElementById("nome"),
    filhos: document.getElementById("filhos"),
    salario: document.getElementById("salario"),
    adicionar: document.getElementById("adicionar")
};

const dadosLista = [{
    nome: "Ada Lovelace",
    filhos: "1",
    salario: "150.0"
}, {
    nome: "Grace Hopper",
    filhos: "2",
    salario: "150.0"
}, {
    nome: "Margaret Hamilton",
    filhos: "3",
    salario: "150.0"
}, {
    nome: "Joan Clark",
    filhos: "4",
    salario: "150.0"
}];

const listaElementosTr = [];

lerDados();

campos.adicionar.addEventListener("click", adicionarDados);

function adicionarDados() {

}

function lerDados() {
    for (i in dadosLista) {

        listaElementosTr[i] = document.createElement("tr");
        tabela.appendChild(listaElementosTr[i]);

        listaElementosTr[i].innerHTML = `  <td>${dadosLista[i].nome}</td>
                                        <td>${dadosLista[i].filhos}</td>
                                        <td>R$ ${dadosLista[i].salario}</td>`
    }
}