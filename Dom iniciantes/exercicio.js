// Retorne o url da página atual utilizando o objeto window
const link = window.location.href;
console.log(`O url da página ${link}`);
// Seleciona o primeiro elemento da página que
// possua a classe ativo

const ativo = document.querySelector('.ativo');
console.log(ativo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura);
