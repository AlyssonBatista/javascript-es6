 var videoGames = ['ps4','nitendo','xbox'];

 videoGames.push('3ds');
 
 for(var num = 0;num < 10;num++){// mostra os numero de 0 a 9
   console.log(num);
 }

 console.log('              %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

 for(var num = 0;num <= videoGames.length;num++){ //Imprime o conteudo do array
  console.log(videoGames[num]);
}
 var item = 0;
 console.log('              %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

 while( item <= videoGames.length){//imprime o conteudo do array
   console.log(videoGames[item])
   item++;
 }
 console.log('              %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

 for(var num = 0;num <= videoGames.length;num++){
   console.log(videoGames[num]);
   if(videoGames[num] === 'nitendo'){
     break;// para o loop quuando a condição satisfaz
   }
 }
console.log('              %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
videoGames.forEach(function(videoGames) {
  console.log(videoGames)
});