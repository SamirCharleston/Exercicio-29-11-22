let form = document.getElementsByTagName("form")[0];
let fieldset = document.createElement("fieldset");
let button = document.createElement("input");
let totalDeVotos = document.createElement("h3");
let funcaoAcessada = false;
let agrupamentoGrafico;
let nomeDoGrafico;
let grafico;
let labels = [];
let inputs = [];
let infoVotos = ["Votos Brancos: ", "Votos Nulos: ", "Votos Válidos: "];

form.innerHTML = "<h1>Contador de Votos</h1>";
form.appendChild(fieldset);


for (i = 0; i < 3; i++) {
    labels[i] = document.createElement("label");
    inputs[i] = document.createElement("input");

    labels[i].innerText = infoVotos[i];

    fieldset.appendChild(labels[i]);
    labels[i].appendChild(inputs[i]);

    labels[i].setAttribute("for", `input-${i}`);

    inputs[i].id = `input-${i}`;
    inputs[i].setAttribute("name", `input-${i}`);
    inputs[i].setAttribute("type", "number");
    inputs[i].setAttribute("min", "0");
}


fieldset.appendChild(button);
button.setAttribute("type", "button");
button.setAttribute("value", "Enviar");
button.id = "button";

button.addEventListener("click", contarVotos);


function contarVotos() {

    let resultadoExibido;
    let tituloResultado;
    let divAux;
    let valores = [];
    let somaDosValores = 0;

    if (!funcaoAcessada) {
        resultadoExibido = document.createElement("div");
        tituloResultado = document.createElement("h2");


        form.appendChild(resultadoExibido);
        resultadoExibido.appendChild(tituloResultado);
        tituloResultado.innerText = "Resultado:";

        resultadoExibido.id = "resultado-exibido";
    }

    for (i in inputs) {
        valores[i] = Number(inputs[i].value);
        somaDosValores += valores[i];
    }

    for (i in valores) {
        let cores = ["#487264", "#304a70", "#c2ce49"];
        valores[i] = (valores[i] * 100) / somaDosValores;

        num = valores[i].toFixed(2);

        if (!funcaoAcessada) {
            agrupamentoGrafico = document.createElement("div");
            nomeDoGrafico = document.createElement("label");
            grafico = document.createElement("div");
            saldo = document.createElement("p");
            totalDeVotos = document.createElement("h3");

            resultadoExibido.appendChild(agrupamentoGrafico);
            agrupamentoGrafico.appendChild(nomeDoGrafico);
            agrupamentoGrafico.appendChild(grafico);
            agrupamentoGrafico.appendChild(saldo);

            agrupamentoGrafico.id = `agrupamento-grafico-${i}`;
            grafico.id = `grafico-${i}`;

            nomeDoGrafico.innerText = infoVotos[i];
            saldo.innerText = num + "%";
        }
        document.getElementById(`agrupamento-grafico-${i}`).style.display = "flex";
        document.getElementById(`agrupamento-grafico-${i}`).style.alignItems = "center";
        document.getElementById(`grafico-${i}`).style.background = `${cores[i]}`;
        document.getElementById(`grafico-${i}`).style.width = `${valores[i]}%`;
        document.getElementById(`grafico-${i}`).style.height = "20px";

    }

    resultadoExibido.appendChild(totalDeVotos);

    if (!funcaoAcessada) {

        totalDeVotos.innerText = `Total de Votos: ${somaDosValores}`;
        button.style.display = "none";
    }

    funcaoAcessada = true;
}