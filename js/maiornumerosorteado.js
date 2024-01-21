// Sala Com 5 Alunos, Para Cada Sortear Numero 1-100;
//Fazer Programa Que Recebe 5 Numeros Sorteados e Mostre o Maior.

/*
    Entrada:
    5
    50
    10
    98
    23

    Saida:
    98
*/

const {sortear} = require('./funcoes-auxiliares');

const qtdAlunos = 5;
var maior = 0;

for (let x = 0; x < qtdAlunos; x++) {
    let sorteado = sortear();
    console.log(sorteado);
    if (sorteado > maior) {
        maior = sorteado;   
    }
}

console.log('Maior: ' + maior);
