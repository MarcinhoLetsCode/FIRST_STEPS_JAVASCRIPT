//-------Função escrevaMeuNome----------

function writeName(name) {
    return 'Meu Nome é: ' + name;
}

(function main() {
    const myName = writeName('Marcinho');
    console.log(myName);

    const myName2 = writeName('Darlan');
    console.log(myName2);

})();

//main();

//-------Funcao VerificaIdade---------

function verificaIdade(age) {
    console.log('Tenho: ' + age + ' Anos');
    if (age >= 18) {
        return 'Maioridade';        
    } else if (age < 18 && age >=0) {
        return 'menoridade';
    } else {
        return 'Error!'
    }
}

function main() {
    console.log(verificaIdade(31));
}

main();

//-----------Função Dentro De Função---------

//-----------Função Calcular Preço---------

function desconto(valor, desconto) {
    return valor - valor * desconto/100;
}

function juros(valor, juros) {
    return valor + valor * juros/100;
}

function calculaPreco(preco, tipoPagamento) {
    if (tipoPagamento === 1) {
        return desconto(preco, 10).toFixed(2);
    } else if (tipoPagamento === 2) {
        return desconto(preco, 15).toFixed(2);
    } else if (tipoPagamento === 3) {
        return desconto(preco, 0).toFixed(2);
    } else if (tipoPagamento === 4) {
        return juros(preco, 10).toFixed(2);
    } else {
        return 'An Error Has Ocurred!';
    }
    /*
    const cartaoDebito = -10/100; //1
    const dineiroPix = -15/100; //2
    const duasVezes = +0; //3
    const maisDuasVezes = +10/100; //4
    if (tipoPagamento === 1) {
        return preco + (preco * (cartaoDebito));
    } else if (tipoPagamento === 2) {
        return preco + (preco * (dineiroPix));
    } else if (tipoPagamento === 3) {
        return preco + (preco * (duasVezes));
    } else if (tipoPagamento === 4) {
        return preco + (preco * (maisDuasVezes));
    } else {
        return 'An Error Has Ocurred!';
    }
    */    
}

function main2() {
    //console.log(calculaPreco(10, 5));
    const final = calculaPreco(10, 4);
    console.log('Valor Final R$ ' + final);
}

main2();
