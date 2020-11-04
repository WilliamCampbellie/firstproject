let goAhead = true;
let pause = 3000
let noteFirstCard = null;
let noteSecondCard = null;
const revealedCards = [];
let score = 50;
let firstOfPair = true;
// let card1OfPair = null;
// let card2OfPair = null;
var language1 = 'de';
var language2 = 'en';

const cards = document.querySelectorAll('.card');
let justClickedCard = ""
function startButton(){
var  language1 = document.getElementsByName("Language1")[0].value;
var  language2 = document.getElementsByName("Language2")[0].value;
document.getElementById("clickMe").value="Restart Game";
  console.log(language1)
  console.log(language2)
  cards.forEach(card => card.addEventListener('click', playATurn));
};
deck = startGame(); // sort this button out

function reply_click(clicked_id) {
  return(clicked_id);
}

function tester() {
  console.log("Test successful")
}

function flipBack(){
  if (score <=1) {
    document.getElementById("score").innerHTML = "You Lose!";    
    goAhead = false;
  } else {
    noteFirstCard.classList.toggle('flip');
    noteSecondCard.classList.toggle('flip');
    goAhead = true;
  }
}


function startGame() {
  document.getElementById("score").innerHTML = "Score " + score ;
    
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
  console.log("later ", language1)
  }
  return layOut;
};

function dealCards() {
  for (let i = 0; i < 20; ++i) {
    let currentClass = "card" + i;
    document.getElementsByClassName(currentClass)[0].innerHTML = deck[i].display;
  }
}

function reply_click(clicked_id) {
  justClickedCard = clicked_id;
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
  if ((revealedCards.includes(Number(justClickedCard)) === false) && (goAhead)){
    if (firstOfPair == true) {
        noteFirstCard = this;
        firstCard();
    } else {
        noteSecondCard = this;
        secondCard();
          }
}
}

dealCards();
function firstCard() {
  noteFirstCard.classList.toggle('flip');
  card1OfPair = justClickedCard
  firstOfPair = false;
}

function secondCard() {
  card2OfPair = justClickedCard
  noteSecondCard.classList.toggle('flip');
  if (deck[card1OfPair].display === deck[card2OfPair].match) {
    tester()
    console.log(noteSecondCard)
    revealedCards.push(Number(card1OfPair));
    revealedCards.push(Number(card2OfPair));
    noteFirstCard.classList.remove('cardfront');
    noteFirstCard.querySelector('div').classList.add('revealed')
    noteSecondCard.querySelector('div').classList.add('revealed')
    noteFirstCard.classList.remove('cardfront');
  } else {
    score = score-2;
    document.getElementById("score").innerHTML = "Score " + score ;    
    goAhead = false;
    let pauseID = setTimeout(flipBack, pause);
  }
  firstOfPair = true;

}