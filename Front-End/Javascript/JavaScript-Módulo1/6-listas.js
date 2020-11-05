console.log(`Listas`);

const cidades = new Array (
    "Rio de Janeiro",
    "Salvador",
    "São Paulo"
);

cidades.push("Curitiba");

cidades.splice(1, 1);

console.log(cidades);

console.log(cidades[1]);