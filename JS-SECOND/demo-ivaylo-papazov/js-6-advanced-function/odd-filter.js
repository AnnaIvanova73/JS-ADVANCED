// Filter odd numbers

let numbers = [1, 4, 10, 23, 20, -11];

// Predicat
function isOdd(number) {
    return number % 2 != 0;
}

let oddNumbers = numbers.filter(isOdd);
// let oddNumbers = numbers.filter(x => x % 2 != 0); // equivalent

console.log(oddNumbers);