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
 

 