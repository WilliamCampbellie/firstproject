let noteFirstCard = null;
const revealedCards = [];
let score = 120;
let firstOfPair = true;
let card1OfPair = null;
let card2OfPair = null;
let language1 = 'es';
let language2 = 'ga';
const cards = document.querySelectorAll('.card');
justClickedCard = ""
cards.forEach(card => {card.addEventListener('click', playATurn); });

function reply_click(clicked_id) {
    return(clicked_id);
    console.log(clicked_id);
}

function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function tester() {
  console.log("Test successful")
}

deck = startGame();
// console.log(deck);

function startGame() {
  let cardsDealt = shuffle(cardArray).slice(0,10);
  let layOut = [];
  let twentyRandom = shuffle(oneToTwenty)
  let thisOrder = 0
  let element = {};
  
  for (let i = 0; i <10; i++) {
    layOut.splice([twentyRandom[i]],0, { "display" : cardsDealt[i][language1], "match": cardsDealt[i][language2]  });
  }
  
  for (let i = 0; i <10; i++) {
    layOut.splice([twentyRandom[i]],0, { "display" : cardsDealt[i][language2], "match": cardsDealt[i][language1]  });
  }
return layOut;
};

function dealCards() {
  for (let i = 0; i < 20; ++i) {
    let currentClass = "card" + i;
    document.getElementsByClassName(currentClass)[0].innerHTML = deck[i].display;
  }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

function playATurn() {
  if (revealedCards.includes(Number(justClickedCard)) == false){
      this.classList.toggle('flip');
  if (firstOfPair == true) {
    firstCard()
    noteFirstCard = this
    console.log("first card done")
  } else {
    secondCard();
    console.log("doing second card")
    this.classList.toggle('flip');
    console.log(firstOfPair)
    // wait(3000);
    // noteFirstCard.classList.toggle('flip');
    console.log("second card done")
    
  } 
}
console.log(firstOfPair)
}

function flipCard() {
  // id="0".classList.toggle('flip');
}

dealCards();

function firstCard() {
  score = score - 1;
  card1OfPair = justClickedCard
  firstOfPair = false;
  
}

function secondCard() {
  console.log("doing second card function")
  card2OfPair = justClickedCard
if (deck[card1OfPair].display === deck[card2OfPair].match) {
  revealedCards.push(Number(card1OfPair));
  revealedCards.push(Number(card2OfPair));
// console.log(revealedCards)
// console.log(deck[card1OfPair])
} else {
  // console.log("no match")
  // console.log(deck[card1OfPair])
  // this.classList.toggle('flip');
}
firstOfPair = true;

}


function reply_click(clicked_id) {
  justClickedCard = clicked_id;
}

