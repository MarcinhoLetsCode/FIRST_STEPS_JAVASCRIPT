
class Person{
    name;
    age;

    descrever() {
        console.log(`Meu Nome é ${this.name} e minha idade é ${this.age}`);
    }
}

const marcinho = new Person();
marcinho.name = 'Márcio Darlan';
marcinho['age'] = 31;

const darlan = new Person();
darlan.name = 'Lafayette';
darlan['age'] = 31;

console.log(marcinho);
console.log(darlan);

marcinho.descrever();
darlan.descrever();

