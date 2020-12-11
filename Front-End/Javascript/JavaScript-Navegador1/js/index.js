// Título
let h1 = document.querySelector(".titulo"); //h1 ou #titulo
h1.textContent = "Aparecida Nutricionista";

// Elementos
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    // Valores dos elementos
    var pesoTD = pacientes[i].querySelector(".info-peso");
    var alturaTD = pacientes[i].querySelector(".info-altura");
    var imcTD = pacientes[i].querySelector(".info-imc");
    var peso = pesoTD.textContent;
    var altura = alturaTD.textContent;

    // Validação de valores
    var validacaoPeso = (peso >= 2 && peso <= 300);
    var validacaoAltura = (altura >= 0.5 && altura < 2.5);
    var imc = peso/(altura * altura);
    var validacao = false;

    if (!validacaoPeso) {
        pesoTD.textContent = "Peso inválido";
        pesoTD.classList.add("paciente-invalido");
    };

    if (!validacaoAltura) {
        alturaTD.textContent = "Altura inválida";
        alturaTD.classList.add("paciente-invalido");
    };

    if (validacaoPeso && validacaoAltura) {
        validacao = true;
    };

    if (validacao) {
        imcTD.textContent = imc.toFixed(2);
    } else {
        imcTD.textContent = "Error";
    };
};