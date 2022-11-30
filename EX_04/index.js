let objPessoas = {
    diego: document.getElementById("diego"),
    gabriel: document.getElementById("gabriel"),
    grazi: document.getElementById("grazi"),
    amanda: document.getElementById("amanda")
}

let homemMaisVelho = homemMaisNovo = mulherMaisVelha = mulherMaisNova = 0;
let idadeDiego = idadeGabriel = 0;
let botao = document.getElementById("calcular");

botao.addEventListener("click", calcular);

function calcular() {
    idadeDiego = Number(objPessoas.diego.value);
    idadeGabriel = Number(objPessoas.gabriel.value);
    idadeGrazi = Number(objPessoas.grazi.value);
    idadeAmanda = Number(objPessoas.amanda.value);

    if (idadeDiego > idadeGabriel) {
        homemMaisVelho = idadeDiego;
        homemMaisNovo = idadeGabriel;
    } else {
        homemMaisVelho = idadeGabriel;
        homemMaisNovo = idadeDiego;
    }

    if (idadeGrazi > idadeAmanda) {
        mulherMaisVelha = idadeGrazi;
        mulherMaisNova = idadeAmanda;
    } else {
        mulherMaisVelha = idadeAmanda;
        mulherMaisNova = idadeGrazi;
    }

    homemMaisVelho += mulherMaisNova;
    homemMaisNovo *= mulherMaisVelha;

    document.getElementsByTagName("h2")[0].innerText = `A soma da idade do homem mais velho com a mulher mais nova: ${homemMaisVelho}`;
    document.getElementsByTagName("h2")[1].innerText = `O produto da idade do homem mais novo com a mulher mais velha: ${homemMaisNovo}`;
}

