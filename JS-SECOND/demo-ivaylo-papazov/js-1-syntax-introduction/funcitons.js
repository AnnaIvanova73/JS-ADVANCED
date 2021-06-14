// Function Declaration 
function printSomething(text) {
    console.log(text);
}

printSomething('Pesho e gotin');

// Function Expression
let printMessage = function(text) {
    console.log(text);
};

printMessage('Pesho e oshte po-gotin!');

// Arrow Function
let sum = (a, b) => {
    console.log(a + b);
}

sum(2, 10);