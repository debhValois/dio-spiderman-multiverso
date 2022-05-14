//console.log("Olá Mundo")

function handleMouseEnter() { // qdo mouse passar em cima do elemento 
    this.classList.add('s-card--hovered'); // use os efeitos dessa classe
    document.body.id = `${this.id}-hovered`; // pegue imagem pelo ID
  }
  
  function handleMouseLeave() { // qdo retirar o mouse de cima do elemento 
    this.classList.remove('s-card--hovered'); // remova os efeitos dessa classe
    document.body.id = ''; // limpe o ID
  }
  
  function addEventListenersToCards() { //evento de chamada dos cards
    const cardElements = document.getElementsByClassName('s-card'); //receba todos os elementos dessa classe
    console.log(cardElements); //para testes no console
    
    for (let index = 0; index < cardElements.length; index++) { //p cada elemento add uma classe
      const card = cardElements[index];
      card.addEventListener('mouseenter', handleMouseEnter);//qdo usuário passa mouse em cima
      card.addEventListener('mouseleave', handleMouseLeave);//qdo usuário retira o mouse de cima
    }
  }
  
  document.addEventListener("DOMContentLoaded", addEventListenersToCards, false); 
  //chamar a função somente após a page ter sido completamente carregada



/* https://www.youtube.com/watch?v=a29-lfFi9Qc 12/05/2022
date: 13/05 | timer video: 01:19:15
sujet: JS card-hover-animation.js */