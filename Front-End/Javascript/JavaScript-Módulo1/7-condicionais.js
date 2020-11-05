console.log(`Condições \n`);

const cidades = new Array (
    "Rio de Janeiro",
    "Salvador",
    "São Paulo"
);

// Informações cliente
const idadeComprador = 19;
const acompanhada = false;
let passagemComprada = true;
const destino = 1;

// Verificações 
const maiorDeIdade = idadeComprador >= 18;
const maiorDeIdadePassagemComprada = maiorDeIdade && passagemComprada;
const acompanhadaPassagemComprada = acompanhada && passagemComprada;

if(maiorDeIdade || acompanhada) {
    console.log(`Pacotes disponíveis:\n`)
    console.log(cidades,"\n");
    console.log(`O destino selecionado é ${cidades[destino]}\n`)
    var destinoConfirmado = cidades[destino];
    cidades.splice(destino,1);
    passagemComprada = true;
    console.log(`Pacotes disponíveis:\n`)
    console.log(cidades,"\n");
} else {
    console.log("O cliente é menor de idade e não está acompanhado\n");
    passagemComprada = false;
}

if(maiorDeIdadePassagemComprada || acompanhadaPassagemComprada) {
    console.log(`Embarque com o destino para ${destinoConfirmado} confirmado \n`);
} else {
    console.log("Embarque recusado \n");
}

//else if para criar outras verificações