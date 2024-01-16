
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

const marcinho = new Person('Marcinho', '31');
const darlan = new Person('Darlan', '31');

console.log(marcinho);
console.log(darlan);

marcinho.descrever();
darlan.descrever();
