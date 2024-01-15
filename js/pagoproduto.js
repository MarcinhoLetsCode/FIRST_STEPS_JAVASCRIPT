/*
    Pagamento:
        Vista Debito, 10% Desconto;
        Vista Dinheiro/PIX, 15% Desconto;
        2x, Preco Normal Sem Juros;
        >2x, preco normal + Juros 10%
    
    valor - (valor * (10/100)) 
*/

const valor = 10;

const cartaoDebito = -10/100; //1
const dineiroPix = -15/100; //2
const duasVezes = +0; //3
const maisDuasVezes = +10/100; //4

const pagamento = 4;

if (pagamento === 1) {
    console.log('Valor a Pagar é: R$' + (valor + (valor * cartaoDebito)));
} else if (pagamento === 2) {
    console.log('Valor a Pagar é: R$' + (valor + (valor * dineiroPix)));
} else if (pagamento === 3) {
    console.log('Valor a Pagar é: R$' + (valor + (valor * duasVezes)));
} else if (pagamento === 4) {
    console.log('Valor a Pagar é: R$' + (valor + (valor * maisDuasVezes)));
}
