// Exercício - Cálculo de Valor de Uma Viagem
// Faça um Programa Para Calcular o Valor De Uma Viagem;
//
// Você Terá 3 Variáveis. Sendo Elas:
// 1 - Preço Do Combustível;
// 2 - Gasto Médio De Combustível Do Carro Por KM;
// 3 - Distância Em KM Da Viagem.
//
// Imprima No Console o Valor Que Será Gasto Para Realizar Esta Viagem.
//

const combustivel = 3.59;
const gasto = 6.2;
const distancia = 12;

console.log("Valor Em Reais: R$ " + ((12/6.2)*3.59).toFixed(2));
console.log("Valor Em Reais: R$ " + ((distancia/gasto)*combustivel).toFixed(2));

const Valor = (distancia/gasto)*combustivel;
console.log("Valor Em Reais: R$ " + Valor.toFixed(2));