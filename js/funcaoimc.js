/* IMC

Classificação do IMC de acordo com a OMS:

-IMC <18,5kg/m2 - baixo peso
-IMC >18,5 até 24,9kg/m2 - eutrofia (peso adequado)
-IMC ≥25 até 29,9kg/m2 - sobrepeso
-IMC >30,0kg/m2 até 34,9kg/m2 - obesidade grau 1
-IMC >35kg/m2 até 39,9kg/m2 - obesidade grau 2
-IMC > 40kg/m2 - obesidade extrema

Formul:
IMC = peso / (altura * altura)

*/
function imc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificaImc(imc) {
    console.log(imc.toFixed(2));
    if (imc < 18.5) {
        return 'baixo peso';
    } else if (imc > 18.5 && imc < 25) {
        return 'eutrofia';
    } else if (imc >= 25 && imc < 30) {
        return 'sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        return 'obesidade grau 1';
    } else if (imc > 40) {
        return 'obesidade grau 2';
    } else {
        return 'obesidade grau 3';
    }
}

//Main
(function () {
    const peso = 80;
    const altura = 1.74;
    const calcImc = imc(peso, altura);

    const class1 = "baixo peso";
    const class2 = "eutrofia";
    const class3 = "sobrepeso";
    const class4 = "obesidade grau 1";
    const class5 = "obesidade grau 2";
    const class6 = "obesidade grau 3";

    const classificado = classificaImc(calcImc);
    console.log(classificado);
})();

//main();

main = function() {
    console.log(1);
}

main();
