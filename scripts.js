let restart = false;
let goAhead = false;
let ding = new Audio('images/ding.mp3');
let youWin = new Audio('images/YouWin.mp3');
let pause = 3000
let noteFirstCard = null;
let noteSecondCard = null;
const revealedCards = [];
let score = 50;
let firstOfPair = true;
let language1; 
let language2 ;
let deck
const cards = document.querySelectorAll('.card');
let justClickedCard = ""

function tester() {
  console.log("Test successful")
}

function removeClass(selector, myClass) {
  elements = document.querySelectorAll(selector);
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.remove(myClass);
  }
}

function startButton(){
  goAhead = true;
  language1 = document.getElementsByName("Language1")[0].value;
  language2 = document.getElementsByName("Language2")[0].value;
  cards.forEach(card => card.addEventListener('click', playATurn));
  deck = startGame(); // sort this button out
  dealCards();
  document.getElementById("clickMe").value="Restart";
  if (restart){
    // document.getElementById("score").innerHTML = "";    
    // element.classList.remove("flip");
    // removeClass('.cardfront', 'revealed');
    // removeClass('.cardfront', 'flip');
    location.reload();  // reload to cope with the class remove not working
  }
  restart = true;

};

function reply_click(clicked_id) {
  return(clicked_id);
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
  let currentIndex = array.length, temporaryValue, randomIndex;
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

function firstCard() {
  noteFirstCard.classList.toggle('flip');
  card1OfPair = justClickedCard
  firstOfPair = false;
}

function secondCard() {
  card2OfPair = justClickedCard
  noteSecondCard.classList.toggle('flip');
  if (deck[card1OfPair].display === deck[card2OfPair].match) {
    revealedCards.push(Number(card1OfPair));
    revealedCards.push(Number(card2OfPair));
    if (revealedCards.length > 19) {
      winner();
    } else {
      ding.play();  
    }
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
  
}function winner() {
  youWin.play();  
  document.getElementById("score").innerHTML = "You Won! Your score is " + score ;    
  goAhead = false;
}