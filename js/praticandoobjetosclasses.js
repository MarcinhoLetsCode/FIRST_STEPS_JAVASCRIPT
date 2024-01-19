// Classe para Carro
// Os Carros Posuem: Marca, Cor e Gasto Médio De Combustível
// Crie Método Que Através Km e Valor Combustivel Calcule Valor Gasto
/*
class Car{
    brand;
    color;
    kmLiter;

    constructor (marca, cor, mediaKm) {
        this.brand = marca;
        this.color = cor;
        this.kmLiter = mediaKm;
    }

    calcularGasto (distance, gas) {
        console.log(`Valor Gasto No Percurso: R$${(distance * this.kmLiter * gas).toFixed(2)}`);
    }
}

const car1 = new Car('Volks', 'Prata', 1/6.5);
console.log(car1);
car1.calcularGasto(6.5, 5);

car2 = new Car('Mitsu', 'Azul', 1/5);
console.log(car2);
car2.calcularGasto(20, 5);
*/

//Classe Representar Pessoa
//Cada Pessoa = Nome, Peso e Altura
//Capazes Dizer Valor IMC (IMC= Peso / (Altura *Altura))
//Instanciar Jose 70kg e 1,75cm e Ele Dizer Valor IMC

class Pessoa{
    name;
    weight;
    height;
    constructor(nome, peso, altura){
        this.name = nome;
        this.weight = peso;
        this.height = altura;
    }

    calcularImc(){
        this.classificarImc(this.weight / Math.pow(this.height, 2));
        return this.weight / Math.pow(this.height, 2);        
    }

    classificarImc(imc){
        if (imc < 18.5) {
            console.log('baixo peso');
        } else if (imc > 18.5 && imc < 25) {
            console.log('eutrofia');
        } else if (imc >= 25 && imc < 30) {
            console.log('sobrepeso');
        } else if (imc >= 30 && imc < 35) {
            console.log('obesidade grau 1');
        } else if (imc > 40) {
            console.log('obesidade grau 2');
        } else {
            console.log('obesidade grau 3');
        }
    }
}

jose = new Pessoa('José', '84', '1.74');
console.log(jose.calcularImc().toFixed(2));
