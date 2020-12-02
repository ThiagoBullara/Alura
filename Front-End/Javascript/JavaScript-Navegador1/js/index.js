let h1 = document.querySelector(".titulo"); //h1 ou #titulo
h1.textContent = "Aparecida Nutricionista";

// Elementos
var tabela = document.querySelector("#tabela-pacientes");
var paciente = tabela.querySelector(".paciente");
var pesoTb = paciente.querySelector(".info-peso");
var alturaTb = paciente.querySelector(".info-altura");
var imcTd = document.querySelector(".info-imc");

// Valores dos elementos
let peso = pesoTb.textContent;
let altura = alturaTb.textContent;

// Validação de valores
var validacaoPeso = (peso >= 2 && peso <= 300);
var validacaoAltura = (altura >= 0.5 && altura < 2.5);
var validacao = false;

if (!validacaoPeso) {
    pesoTb.textContent = "Peso inválido";
};

if (!validacaoAltura) {
    alturaTb.textContent = "Altura inválida";
};

if (validacaoPeso && validacaoAltura) {
    validacao = true;
};

if (validacao) {
    imcTd.textContent = peso/(altura * altura);
} else {
    imcTd.textContent = "Error";
};