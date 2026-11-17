// Objetos

// Construtores de Objetos

// const pessoa = {
//   nome: "Sara",
//   sobrenome: "Souza",
//   idade: 17,
//   altura: 1.62,
// };

function Pessoa(nome, sobrenome, idade, altura) {
  this.nomePessoa = nome;
  this.sobrenomePessoa = sobrenome;
  this.idadePessoa = idade;
  this.alturaPessoa = altura;
}

const minhaPessoa = new Pessoa("Sara", "Souza", 17, 1.62);

const meuIrmao = new Pessoa("Howard", "Alexandre", 5, 1.10);

console.log(minhaPessoa);
console.log(meuIrmao);

meuIrmao.carro = "Porsche";
minhaPessoa.moto = "Ducati";

console.log(Pessoa);