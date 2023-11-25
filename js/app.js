// elements of the DOM

const cardsElements = document.querySelectorAll(".card");
const imagesElements = document.querySelectorAll("img");

// global variables
let cardOne = "";
let cardTwo = "";
let cardOneImage = "";
let cardTwoImage = "";
let isPlaying = false;
let tries = 0;

/**
 * / Flip the anywhere card when the card is clicked
 * @param {*} event
 * @returns any
 */
function flipCard(e) {
  pauseGame();
  setTimeout(() => {
    resumeGame()
  }, 700);
  let card = e.target.offsetParent;
  if (card !== cardOne) {
    card.classList.add("active");
    if (!cardOne) {
      return (cardOne = card);
    }
    cardTwo = card;
  }
  cardOneImage = cardOne.querySelector("img").src;
  cardTwoImage = cardTwo.querySelector("img").src;
  matchCards(cardOneImage, cardTwoImage);
}

function pauseGame() {
  isPlaying = true;
  cardsElements.forEach((card)=> {
    card.style.userSelect = "none";
    card.style.pointerEvents = "none";
  });
}

function resumeGame() {
  isPlaying = false;
  cardsElements.forEach((card)=> {
    if(card.classList.contains("active")) {
      card.style.userSelect = "none";
      card.style.pointerEvents = "none";
    } else {
      card.style.userSelect = "auto";
      card.style.pointerEvents = "auto";
    }
  });
}

/**
 * verify matching  of two cards
 * @param {string} a
 * @param {string} b
 */
function matchCards(a, b) {
  if (a === b) {
    cardOne.classList.add("active");
    cardTwo.classList.add("active");
    cardOneImage = "";
    cardTwoImage = "";
    (cardOne = ""), (cardTwo = "");
    tries += 1;
    resumeGame();
  } else {
    cardOne.classList.add("error");
    cardTwo.classList.add("error");
    cardOneImage = "";
    cardTwoImage = "";
    setTimeout(() => {
      cardOne.classList.remove("error", "active");
      cardTwo.classList.remove("error", "active");
      (cardOne = ""), (cardTwo = "");
    }, 800);
    pauseGame();
  }
  setTimeout(()=> {
    resumeGame();
  }, 800);
  tries == 8 ? resetGame() : null;
}

/**
 * Generate random position for each image into card and make dinamic the game
 */
function shuffleCards() {
  const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  cardList.sort(() => (Math.random() >= 0.5 ? 1 : -1));
  imagesElements.forEach((image, index) => {
    image.src = `./img/img-${cardList[index]}.png`; // shuffle cards randomly
  });
}

/**
 * Reset the game and generate a new game.
 * @return Any
 */
function resetGame() {
  setTimeout(() => {
    cardOne = "";
    cardTwo = "";
    cardOneImage = "";
    cardTwoImage = "";
    tries = 0;
    cardsElements.forEach((card) => {
      card.classList.remove("active");
    });
  }, 500);
  shuffleCards();
  resumeGame();
}

shuffleCards();

cardsElements.forEach((card) => {
  card.addEventListener("click", flipCard);
});
