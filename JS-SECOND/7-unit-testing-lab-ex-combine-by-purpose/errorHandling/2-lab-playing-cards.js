function factory(f, s) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = new Map();
    suits.set('S', '\u2660');
    suits.set('H', '\u2665');
    suits.set('D', '\u2666');
    suits.set('C', '\u2663');

    if (!faces.includes(f) || !suits.has(s)) {
        throw new Error('Invalid input');
    }
    let face = faces.filter(face => face === f)[0];
    let suit = suits.get(s);

    return {
        face, suit, toString: () => {return face + suit}
    };

}

console.log(factory('A', 'S' ).toString())

/*
function factory(f, s) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = new Map();
    suits.set('S', '\u2660');
    suits.set('H', '\u2665');
    suits.set('D', '\u2666');
    suits.set('C', '\u2663');

    if (!faces.includes(f) || !suits.has(s)) {
        throw new Error('Invalid input');
    }
    let face = faces.filter(face => face === f)[0];
    let suit = suits.get(s);

    return {
        face, suit, toString (){return this.face + this.suit}
    };

}
 */
/*
function factory(f, s) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = new Map();
    suits.set('S', '\u2660');
    suits.set('H', '\u2665');
    suits.set('D', '\u2666');
    suits.set('C', '\u2663');

    if (!faces.includes(f) || !suits.has(s)) {
        throw new Error('Invalid input');
    }
    let face = faces.filter(face => face === f)[0];
    let suit = suits.get(s);

    return {
        face, suit, toString: function () {return this.face + this.suit}
    };

}

 */