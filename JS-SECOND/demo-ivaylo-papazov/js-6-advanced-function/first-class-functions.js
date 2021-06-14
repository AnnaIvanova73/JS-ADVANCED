// Pass function as argument
function hello(name) {
    return `Hello, ${name}`;
}

function fancyHello(name) {
    return `Hi there mr. ${name}`;
}

function greet(personName, sayHello) {
    return sayHello(personName);
}

console.log(greet('Pesho', hello))
console.log(greet('Stamat', fancyHello))

// Return function
function greet(name) {
    return function (message) {
        console.log(`Hello there ${name}, ${message}`);
    }
};

let greetPesho = greet('Pesho');
greetPesho('How are you today?');
greetPesho('Would you like a cup of tea?');
