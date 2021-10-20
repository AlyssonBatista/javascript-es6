 //Boolean %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 var possuiGraduacao = false;
 var possuiDoutorado = false;

 //Condicionais if e else %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 if(possuiGraduacao){
   console.log("Possui graduação!!");
 }else{
   console.log("Ainda não possui graduação");
 }

 //Condicionais else if %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 var possuiEnsinoMedio = false;

 if(possuiDoutorado){
   console.log("POssui doutorado!!");
 }else if(possuiGraduacao){
   console.log("Possui graduação!!");
 }else{
   console.log("POssui ensino médio!!")
 }

 //truthy e falsy %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Truthy
 if(true);
 if(1);
 if(' ');
 if('Alysson')
 if(-5);
 if({});

 //falsy
 if(false);
 if(0)// ou -0
 if(NaN);
 if(null);
 if(undefined);
 if(''); //ou com "" ou ``

 //Operador Lógico de Negação ! %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Usar a ! inverte o estado lógico da variável

var casa = "bonita";
if(!casa){// Se casa for false ela vai ser feia
  console.log('Feia');
} else{//
  console.log('bonita');
}

if(!true);//false
 if(!1);//false
 if(!' ');//false
 if(!'Alysson')//false
 if(!-5);//false
 if(!{});//false


 // usar !! verifica o estado lógico real da variável 
 if(!!casa){ 
   console.log(casa)
 }else{
    console.log("feia")
 }

 //Operadores de comparação %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 var a = 10,
     b = 5 ,
     c = 20,
     d = 11;

if(a>b){
  console.log("A maior que B");
}else{
  console.log("A menor que B");
}
if(a>c){
  console.log("A maior que C");
}else{
  console.log("A menor que C");
}
if(a>d){
  console.log("A maior que D");
}else{
  console.log("A menor que D");
}


