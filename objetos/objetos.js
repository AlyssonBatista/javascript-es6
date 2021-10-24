 var retangulo = {
   base: 10,
   altura: 20,
  area: function(base,altura){
     area = this.base * this.altura;// o this acessa a propriedade do objeto retangulo
     return area;
   },
  perimetro: function(base,altura){
     perimetro = (this.base * this.altura)*2;
     return perimetro;
   }
 };

 console.log(retangulo.altura);
 console.log(retangulo.base);
 console.log(retangulo.area(2,2));
 console.log(retangulo.perimetro(2,2));
 
console.log(Math.exp(4));
console.log(Math.PI*retangulo.altura);

var menu ={
  with: 10,
  height: 20,
  backgroundcolor: "#542235"
}

menu.backgroundcolor = "#992323"; //Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

console.log(menu.height);//Acesse propriedades de um objeto utilizando o ponto .

