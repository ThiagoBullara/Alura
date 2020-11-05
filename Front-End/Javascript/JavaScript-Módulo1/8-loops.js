console.log(`\nLoops \n`);

const cidades = new Array (
    "Rio de Janeiro",
    "Salvador",
    "São Paulo"
);

// Informações cliente
const idadeComprador = 15;
const acompanhada = true;
let passagemComprada = true;
const destino = "São Paulo";
var destinoValdio = false;

// Verificações 
const podeComprar = idadeComprador >= 18 || acompanhada;

console.log(`O destino desejado é ${destino}\n`);

let contador = 0;

while(contador < cidades.length) {
    if(cidades[contador] == destino) {
        console.log(`O destino: ${destino} está disponível\n`);
        var destinoValido = true;
        break;
    } else {
        contador ++;
    }
}

// for(let i = 0; i < cidades.length; i++) {
//     console.log(`${cidades[i]} \n`);
// }

if(destinoValido) {
    if(podeComprar) {
        console.log(`Checkout para ${destino} em processo\n`);
    } else {
        if(destinoValido) {
            console.log("O cliente é menor de idade e não está acompanhado\n");
        } else {
            console.log("O cliente é menor de idade, não está acompanhado e o destino não existe\n");
        }
    }

} else {
    console.log (`O destino ${destino} não existe\n`);
}