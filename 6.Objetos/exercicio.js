 // Crie um objeto com os seus dados pessoais
 // Deve possui pelo menos duas propriedades nome e sobrenome
 var dados = {
   nome: 'Alysson',
   sobrenome: 'Batista',
   idade: 30,
   estadoCivil: 'solteiro',
   rg: 3423234,
 }

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function(){
  return `${dados.nome} ${dados.sobrenome}`
}
console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  cor: 'preto',
  raca: 'labrador',
  idade: 10,
  cao: function(){
    return `O cão ${this.cor} da raça ${this.raca} tem ${this.idade} anos de idade`
  },
}
console.log(cachorro.cao());


