 // Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copaBr = [1959,1962,1970,1994,2002]
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(ano = 0;ano < copaBr.length;ano++){
  console.log(`O Brasil ganhou a copa de ${copaBr[ano]}`)
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
item = 0;
while(item < frutas.length){
  console.log(frutas[item]);
  if(frutas[item]==='Pera'){
    break;
  }
  item++;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var fruta = frutas[2];
console.log('A fruta é ' + fruta);
