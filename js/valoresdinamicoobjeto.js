
const pessoa = {
    nome: 'Márcio Darlan',
    idade: 31,
    sexo: 'Male',

    descrever: function () {
        console.log(`Meu Nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa['nome'] = 'teste';

console.log(pessoa['nome']);
console.log(pessoa.nome);
