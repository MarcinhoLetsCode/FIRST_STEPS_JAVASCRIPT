// Conceito Boolean & Condicional

const condicionalTrue = true;
const condicionalFalse = false;

console.log(condicionalTrue + condicionalFalse);

if (condicionalTrue) {
    console.log("Sim");
}

if (condicionalFalse) {
    console.log("Sim");
} else {
    console.log("Não");
}

// Exemplo com Resto de Divisão

const numPar = 11;

if (parseInt(numPar/2)*2 === numPar) {
    console.log("Par");    
} else {
    console.log("Não");
}

if (numPar % 2 === 0) {
    console.log("Par");    
} else {
    console.log("Não");
}

const ePar = (numPar % 2) === 0;
console.log(ePar);