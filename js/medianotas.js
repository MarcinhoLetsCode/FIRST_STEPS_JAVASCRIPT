/*
    1) Calcule e Imprima Média De 3 Notas e a Classificação

    Classificação:
    - < 5 = Reprovado;
    - Entre 5 & 7 = Recuperação;
    - > 7 = Passou De Semestre.

    */

const nota1 = 7;
const nota2 = 7;
const nota3 = 7.1;

const classificacao = (nota1+nota2+nota3) / 3;

if (classificacao <= 5) {
    console.log('Reprovado');
} else if (classificacao > 5 & classificacao <= 7) {
    console.log('Recuperação');
} else if (classificacao > 7) {
    console.log('Passou De Semestre');
} else {
    console.log('Algo Saiu Errado!');
}