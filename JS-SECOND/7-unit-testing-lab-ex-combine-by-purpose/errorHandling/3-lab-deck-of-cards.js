function printDeckOfCards(cards) {
    let arr = []

    function createCard(f, s) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = new Map();
        suits.set('S', '\u2660');
        suits.set('H', '\u2665');
        suits.set('D', '\u2666');
        suits.set('C', '\u2663');


        if (!faces.includes(f) || !suits.has(s)) {
            console.log(`Invalid card: ${f + s}`)
        }
        let face = faces.filter(face => face === f)[0];
        let suit = suits.get(s);

        return {
            face, suit, toString: () => {
                return face + suit
            }
        };

    }
    cards.forEach(currCard => {
        let f = currCard.substring(0, currCard.length - 1);
        let s = currCard.substring(currCard.length - 1);
        let card = createCard(f, s);
        arr.push(card)
    })

    console.log(arr.join(' '))
}


function printDeckOfCards1(cards) {
    let deck = [];
    for (const currCard of cards) {
        let face = currCard.substring(0, currCard.length - 1);
        let suit = currCard.substring(currCard.length - 1);
        try {
            deck.push(createCard(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }
    console.log(deck.join(' '));

    function createCard(f, s) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = new Map();
        suits.set('S', '\u2660');
        suits.set('H', '\u2665');
        suits.set('D', '\u2666');
        suits.set('C', '\u2663');

        if (!faces.includes(f) || !suits.has(s)) {
            throw new Error;
        }
        let face = faces.filter(face => face === f)[0];
        let suit = suits.get(s);

        return {
            face, suit, toString: () => {
                return face + suit
            }
        };

    }
}

/*
function printDeckOfCards(cards) {
  let deck = [];
  for (const cardStr of cards) {
    const face = cardStr.substring(0, cardStr.length - 1);
    const suit = cardStr.substr(cardStr.length - 1, 1);
    try {
      deck.push(makeCard(face, suit));
    }
    catch (err) {
      console.log('Invalid card: ' + cardStr);
      return;
    }
  }

  console.log(deck.join(' '));

  function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face)) {
      throw new Error('Invalid card face: ' + face);
    }

    if (!validSuits.includes(suit)) {
      throw new Error('Invalid card suit: ' + suit);
    }

    return {
      face: face,
      suit: suit,
      toString: function () {
        const suitToChar = {
          'S': '\u2660', // ♠
          'H': '\u2665', // ♥
          'D': '\u2666', // ♦
          'C': '\u2663', // ♣
        };
        return this.face + suitToChar[this.suit];
      }
    };
  }

 */

//printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
