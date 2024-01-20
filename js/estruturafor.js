
//for (let i = 0; i < 10; i++) {
//    console.log(i);
//}

//Executando String
//const nome = 'Márcio Darlan';
//console.log(nome[1]);

//for (let i = 0; i < nome.length; i++) {
//    console.log(nome[i]);
//}

//Notas

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let media = 0;

for (let x = 0; x < notas.length; x++) {
    const nota = notas[x];
    media = media + nota;
}

console.log(media);
//console.log(media/6);
console.log(media/notas.length);
