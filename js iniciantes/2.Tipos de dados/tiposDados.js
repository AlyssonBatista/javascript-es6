// 7 tipos de dados.
// Os 6 primeiros são tipos primitivos  menos objeto

var nome = 'Alyssson'; // Tipo String
var idade = 30; // Tipo Number
var possuiFaculdade = true; // Tipo boolean
var time; // Tipo undefined.
var comida = null; // Tipo Null.
var simbolo = Symbol(); // Tipo Symbol.
var novoObjeto = {} // Tipo obejto.

// typeof retorna o tipo de objeto

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof possuiFaculdade);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof simbolo);
console.log(typeof novoObjeto);

// concatenar palavras 

var sobrenome = 'batista';
var nomeCompleto = nome +' '+ sobrenome; //Aspas simples para separar as palavras 
console.log(nomeCompleto);

// soma de números com strigs

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);

// Aspas duplas, simples e teplate string 

'js é "super" fácil';//Podemos usar na string aspas simples com aspas duplas dentro
"js é 'super' fácil";//Podemos usar na string aspas duplas com aspas simples dentro
"js é \"super\" fácil"; // para que as aspas duplas ou simples não exerçam sua função dentro da string usamos essas duas contra-barra com o elemento que vai se comporta como string
`js é "super" fácil"`;
//"js é " super "fácil";// erro com o super

//template string   

var gols = 10000;
var frase1 = 'romario fez ' + gols + 'gols';
console.log(frase1);
var frase2 = `romário fez ${gols} gols`; // Podemos passar espresspoes/ variáveis
console.log(frase2);
