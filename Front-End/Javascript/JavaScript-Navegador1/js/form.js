// Adicionar paciente
let addButton = document.querySelector("#adicionar-paciente")
addButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Pega o formulário
    var form = document.querySelector("#formulario");

    // Cria a estrutura do formulário
    var pacienteTR = document.createElement("tr");
    var nomeTD = document.createElement("td");
    var pesoTD = document.createElement("td");
    var alturaTD = document.createElement("td");
    var gorduraTD = document.createElement("td");
    var imcTD = document.createElement("td");

    // Valores do formulário
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Validação
    var validacaoPeso = (peso >= 2 && peso <= 300);
    var validacaoAltura = (altura >= 0.5 && altura < 2.5);
    var imc = peso/(altura * altura);
    var validacao = false;

    // Adiciona os valores nas respectivas estruturas
    nomeTD.textContent = nome;
    pesoTD.textContent = peso;
    alturaTD.textContent = altura;
    gorduraTD.textContent = gordura;
    imcTD.textContent = imc;

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

    // Adiciona a estrutura na row
    pacienteTR.appendChild(nomeTD);
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);
    pacienteTR.appendChild(imcTD);

    // Pega a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    // Adiciona a estrutura na tabela
    tabela.appendChild(pacienteTR);

});