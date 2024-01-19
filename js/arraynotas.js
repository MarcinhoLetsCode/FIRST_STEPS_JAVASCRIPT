
const notas = [];
var soma = 0;
var media = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas);
console.log(notas.length);

const soma2 = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

/*notas.forEach(nota => {
    media = media + nota;
});*/

for (let x = 0; x < notas.length; x++) {
    media = media + notas[x];
}

console.log(media);
console.log(media / notas.length);
