//Imprimir Somente Numeros Pares De Uma Lista
/*
const numeros = [1,2,3,4,5,6];

console.log('Números Pares:');

for (let x = 0; x < numeros.length; x++) {
    const element = numeros[x];
    if (element%2 === 0) {
        console.log(element);
    }
}*/

const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    //console.log(numeroPar);
    //console.log(i % 2 === 0);
    if (numeroPar) {
        //console.log(numeroPar);
        numerosPares.push(i);
    }
}

console.log(numerosPares);