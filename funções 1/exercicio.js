 /* Verifique se a sua idade é maior do que a de algum parente
  Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'*/
 var idadeAlysson = 30;
 var idadeAdriele = 30;

 if(idadeAlysson > idadeAdriele){
   console.log('É maior');
 }else if(idadeAlysson === idadeAdriele){
  console.log('É igual');
 }else{
   console.log('É menor');
 }
 

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - '') && (5 - 2);
console.log(expressao);// 3 retorna a ultima verdade ou a primeira falsa
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';// truthy
console.log(nome);
var idade = 28;// truthy
var possuiDoutorado = false;// falsy
var empregoFuturo;// falsy
var dinheiroNaConta = 0;// truthy

console.log(!!nome,!!idade,!! possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil >china){
  console.log('A população do Brasil é maior')
}else{
  console.log('A população da china é maior');
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { // sairá falso pois Gato é diferente de gato
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}