// Crie uma função para verificar se um valor é Truthy
function valor(num){
  if(num !== undefined){
    console.log(!!num)
  }else{
    console.log('Digite um número!')
  }
}

valor(0)
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(a,b,c,d){
  const per= a + b + c + d;
  return console.log(`O perimetro é ${per}`);
}
perimetro(2,2,2,2);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return console.log(`O nome completo é ${nome+sobrenome}`)
}
  nomeCompleto('Alysson ','Batista de Souza')
// Crie uma função que verifica se um número é par
function par(num){
  if(num%2 === 0){
    console.log('O número é par');
  }else{
    console.log('O número não é par');
  }
}
par(6)
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(argumento){
  var paran = typeof argumento;
  return console.log(paran);
}
tipo(5)
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("click", function(){
  nomeCompleto('Alysson ','Batista de Souza')
});
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
}
function jaVisitei(paisesVisitados) {
  return console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
}
precisoVisitar(20);
jaVisitei(20);
