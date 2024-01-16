
class Person{
    name;
    age;
    birth;

    constructor(nome, idade) {
        this.name = nome;
        this.age = idade;
        this.birth = 2024 - idade;
    }

    descrever() {
        console.log(`Meu Nome é ${this.name} e minha idade é ${this.age}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} é Mais Velho(a) Que ${p2.name}`);
    } else if (p1.age < p2.age) {
        console.log(`${p2.name} é Mais Velho(a) Que ${p1.name}`);
    } else {
        console.log(`${p2.name} e ${p1.name} Possuem a Mesma Idade`);
    }
}

const marcinho = new Person('Marcinho', 25);
const darlan = new Person('Lafayette', 31);

compararPessoas(marcinho, darlan);