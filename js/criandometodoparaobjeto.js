
const pessoa = {
    nome: 'Márcio Darlan',
    idade: 31,
    sexo: 'Male',

    descrever: function () {
        console.log(`Meu Nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.altura = 1.74
console.log(pessoa);
pessoa.descrever();

pessoa.nome = 'Darlan';

pessoa.descrever = function () {
    console.log(`Meu Nome é ${this.nome}`);
}
pessoa.descrever();

pessoa2 = pessoa;
pessoa2.nome = 'Teste';
console.log(pessoa2);
console.log(pessoa2.nome);