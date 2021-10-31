//números %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var idade = 30;
var gols = 1000;
var pi = 3.14;
var exp = 3e10; //números com muitas casas decimais 
console.log(exp);

//operadores %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//operadores aritiméticos %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var soma = '100' + 50; // 10050. Quando se usa o sinal de + entre uma string e némero estamos concatenando
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

//A ordem importa %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var total1 = 20 + 5 * 2; // 30. Vai multiplicar primeiro
var total2 = (20 + 5) * 2; // 50. Vai somar os números dos parenteses primeiro
var total3 = 20 / 2 * 5; // 50. Vai efetuar a operação que vier primeiro, no caso de "/" e "*"
var total4 = 10 + 10 * 2 + 20 / 2; // 40

/*operadores aritiméticos unários %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
console.log("incremento");
var incremento = 5;
console.log(incremento++); // 5. Incrementa depois da operação
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6. Incrementa antes da operação
console.log(incremento2); // 6

console.log("decremento");
var decremento = 5;
console.log(--decremento);//4. Decrementa antes da operação
console.log(decremento); //4

var decremento1 = 5;
console.log(decremento1--);//5. decrementa depois da operação
console.log(decremento1); //4

// O sinais de '-' e '+' transformam o valor seguinte em número

var num = '2';
var num1 = 3;
soma = +num + num1;// o sinal de + na frente da variável transformou a string em número
console.log(soma); 

var num2 = "dois";
var num3 = 3;
soma2 = +num2 + num3;
console.log(soma2); //retorna NaN 

