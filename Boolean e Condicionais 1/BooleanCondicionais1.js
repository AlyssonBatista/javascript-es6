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

 //Operador Lógico de Negação ! %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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
 if(!!casa){
   console.log(casa)
 }else{
   
 }
