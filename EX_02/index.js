let horasDeTrabalho = document.getElementById("horas-trabalhadas");
let salarioPorHora = document.getElementById("salario-hora");
let botaoCalcular = document.getElementById("submit");

botaoCalcular.addEventListener("click", calcularSalario);

function calcularSalario() {
    let horasTrabalhadas = Number(horasDeTrabalho.value);
    let salarioHora = Number(salarioPorHora.value);
    let horasExtras = 0;
    let ganhoTotal = 0;

    horasExtras = horasTrabalhadas % (40 * 4);

    ganhoTotal = (horasExtras * (salarioHora + (salarioHora * 0.5))) + (salarioHora * (horasTrabalhadas - horasExtras));

    ganhoTotal = ganhoTotal.toFixed(2);
    document.getElementsByTagName("h2")[0].innerText = `Salario total: R$${ganhoTotal}`;
}