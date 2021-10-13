//números
var idade = 30;
var gols = 1000;
var pi = 3.14;
var exp = 3e10; //números com muitas casas decimais 
console.log(exp);

//operadores
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//operadores aritiméticos 
var soma = '100' + 50; // 10050. Quando se usa o sinal de + entre uma string e némero estamos concatenando
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

//A ordem importa
var total1 = 20 + 5 * 2; // 30. Vai multiplicar primeiro
var total2 = (20 + 5) * 2; // 50. Vai somar os números dos parenteses primeiro
var total3 = 20 / 2 * 5; // 50. Vai efetuar a operação que vier primeiro, no caso de "/" e "*"
var total4 = 10 + 10 * 2 + 20 / 2; // 40

//operadores aritiméticos unários
var incremento = 5;
console.log(incremento++); // 5. Incrementa depois da operação
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6. Incrementa antes da operação
console.log(incremento2); // 6

