// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var scroll = (scroll) ? scroll + 500 : scroll - 500 ;
console.log(scroll);
// ou
var scroll1 = 1000;
console.log(scroll1 += 500)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? 'Tem credito' : 'Não tem credito';
console.log(darCredito);
