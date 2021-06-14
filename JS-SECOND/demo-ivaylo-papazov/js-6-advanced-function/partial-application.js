function greet(name, message) {
    console.log(`Hey ${name}, ${message}`);
}

// Partial application of greet
// let greetMariya = function(message) {
//     greet('Mariya', message);
// };

// Partial application also
let greetMariya = greet.bind(null, 'Mariya');

greet('Stamat', 'Kak si?');
// greet('Mariya', 'Hi');
// greet('Mariya', 'asl');
// greet('Mariya', 'pls');
greetMariya('Hi!');
greetMariya('asl');
greetMariya('pls');

// Currying
let greetCurry = function(name) {
    return function (message) {
        console.log(`Hey ${name}, ${message}`);
    };
};

let greetPesho = greetCurry('Pesho');
greetPesho('Hi');

greetCurry('Gosho')("K'vo staa");
