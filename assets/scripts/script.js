//Autora: Debh Valois | Data 12 à 20/05/2022 | Origem Code: LiveCoding DIO

/* MOUSE - card-hover-animation - EFEITOS + DESAPARECER IMG + p&b */
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


/* CAROUSEL - ROTATE CARDS */
function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); /* regex => regular expressions */
  const rotateYDeg = -120 * (Number(selectedItem) - 1); /* calc : 360º / 3 cards = 120 */
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  /* TROCA DOS BTNS CONTROLLER */
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}

/* https://www.youtube.com/watch?v=0IY5TJwAbcQ
1:58:57 - MICHELE*/