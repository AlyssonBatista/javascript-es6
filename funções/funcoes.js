 function areaQua(base, altura){
   return base*altura;
 }

 console.log(areaQua(3,5));

 function pi(){
   return 3.14;
 }

 console.log(areaQua(3,5)*pi());

 function cores(cor){
   if(cor === 'verde'){
    console.log('Floresta');
   }else if(cor === 'azul'){
    console.log('Céu')
  //  }else if(cor !== 'verde' && cor !== 'azul'){
  //   console.log('Essas cores estão erradas');
   }else{
    console.log('Você não gosta de cores');
   }
 }

 console.log(cores());

 addEventListener("click",function(){console.log('Pare de clicar!!!')});
 
function imc(peso,altura){
  const imc = peso/altura**2;
  return console.log(imc);
}

imc(30,54);
console.log(imc(30,54));

function terceiraIdade(idade){
if(typeof idade ==='number'){
  if(idade >= 60){
    console.log('É idoso');
  }else{
    console.log('Não é idoso');
  }
}else{
  console.log('Digite um numero');
}
}

terceiraIdade('a')