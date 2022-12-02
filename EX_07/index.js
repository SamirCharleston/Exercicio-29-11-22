const formulario = document.getElementsByTagName("form")[0];
const tabela = document.getElementById("tabela");
const info = document.getElementsByClassName("info")[0];
const atualizar = document.getElementById("atualizar");

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
atualizar.addEventListener("click", atualizarDados);

function adicionarDados() {
    const regex = /[^a-z \s]/i;

    let dadosLidos = {
        nome: "",
        filhos: 0,
        salario: 0
    }

    let validacaoNome = validacaoSalarioFilho = somenteLetras = false;

    dadosLidos.nome = campos.nome.value;
    dadosLidos.filhos = campos.filhos.value;
    dadosLidos.salario = campos.salario.value;

    somenteLetras = regex.test(dadosLidos.nome);

    if (dadosLidos.nome !== "" && !somenteLetras) {
        validacaoNome = true;

        if (dadosLidos.filhos != "" && dadosLidos.salario != "") {

            dadosLidos.filhos = Number(dadosLidos.filhos);
            dadosLidos.salario = Number(dadosLidos.salario);

            if (dadosLidos.filhos >= 0 && dadosLidos.salario >= 0) {
                validacaoSalarioFilho = true;
            } else {
                alert("Preencha os campos Num. Filhos e Salário com valores válidos.");
            }

        } else {
            alert("Preencha todos os campos.");
        }

    } else {
        alert("Digite o nome, sem numeros ou caracteres especiais.");
    }

    if (validacaoNome && validacaoSalarioFilho) {
        let linha = document.createElement("tr");
        tabela.appendChild(linha);

        dadosLidos.salario = dadosLidos.salario.toFixed(1);
        linha.innerHTML = ` <td>${dadosLidos.nome}</td>
                            <td>${dadosLidos.filhos}</td>
                            <td>R$ ${dadosLidos.salario}</td>`

        dadosLista.push(dadosLidos);
        atualizarDados();
        formulario.reset();
    }
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


function atualizarDados() {
    let mediaSalarial = quantidadePessoas = somaSalarios = mediaFilhos = somaFilhos = salarioMenor = maiorSalario = 0;

    for (i = 0; i < dadosLista.length; i++) {
        somaSalarios += Number(dadosLista[i].salario);
        somaFilhos += Number(dadosLista[i].filhos);

        if (maiorSalario < dadosLista[i].salario) {
            maiorSalario = dadosLista[i].salario;
        }

        if (Number(dadosLista[i].salario) < 1500) {
            salarioMenor++;
        }
    }

    quantidadePessoas = Number(dadosLista.length);

    mediaSalarial = somaSalarios / quantidadePessoas;
    mediaFilhos = somaFilhos / quantidadePessoas;
    percentualPessoas = salarioMenor / quantidadePessoas * 100;

    info.innerHTML = `  <p>Media de salário da população: ${mediaSalarial}</p>
                        <p>Media de número de filhos: ${mediaFilhos}</p>
                        <p>Maior salario dos habitantes: ${maiorSalario}</p>
                        <p>Percentual de pessoas com salário menor que R$ 1500,00: ${percentualPessoas}%</p>`;
}