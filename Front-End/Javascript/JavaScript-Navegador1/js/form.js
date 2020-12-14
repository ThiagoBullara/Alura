// Adicionar paciente
let addButton = document.querySelector("#adicionar-paciente")
addButton.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#formulario");
    var tabela = document.querySelector("#tabela-pacientes");
    var paciente = valoresPaciente(form);
    var pacienteTR = montarPaciente(paciente);
    var validacaoPeso = validaPeso(paciente);
    var validacaoAltura = validaAltura(paciente);
    var validacaoFinalResultado = validacaoFinal(validacaoPeso, validacaoAltura);
    tabela.appendChild(pacienteTR);
    form.reset();

    console.log(validacaoFinalResultado);

    function valoresPaciente(form) {

        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: form.peso.value/(form.altura.value * form.altura.value)
        };

        return paciente;
    };

    function montarPaciente(paciente) {

        var pacienteTR = document.createElement("tr");
        pacienteTR.classList.add("paciente");

        pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"));
        pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"));
        pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"));
        pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
        pacienteTR.appendChild(montaTD(paciente.imc.toFixed(2), "info-imc"));

        return pacienteTR;
    };

    function montaTD(dado, classe) {
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);

        return td;
    };

    function validaPeso(paciente) {
        if(paciente.peso < 200 && paciente.peso >= 2) {
            return true;
        } else {
            return false;
        };
    };

    function validaAltura(paciente) {
        if(paciente.altura < 2.3 && paciente.altura >= 0.3) {
            return true;
        } else {
            return false;
        };
    };

    function validacaoFinal(validacaoPeso, validacaoAltura) {
        if(validacaoPeso && validacaoAltura) {
            return true;
        } else {
            return false;
        }
    };

    if(!validacaoFinalResultado) {
        pacienteTR.classList.add("paciente-invalido");
    };
});