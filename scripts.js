let language1 = 'de';
let language2 = 'en';

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

let cardsDealt = shuffle(cardArray).slice(0,10);
let  randomTF = shuffle(TFList);
  
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

console.log(layOut[4]);
console.log(layOut);

