let returnNumber = () => 10;

let result = ((5) + (returnNumber()));

// IIFE
let calculate = (function() {
    let number = 10;
    
    return number + 20;
})();

console.log(calculate);