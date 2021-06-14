let numbers = [2, 10, 5, 4];
// ascending number sort
// numbers.sort() // doesnt work

function compareNumbers(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1
    } else {
        return 0;
    }
}

// numbers.sort(compareNumbers);

// Improvement
numbers.sort((a, b) => a - b); // Ascending
numbers.sort((a, b) => b - a); // Descending

console.log(numbers);

// Sort strings
let cars = ["BMW", "Honda", "Hunday", "Mercedes", "Opel", "audi"];

cars.sort((a, b) => a.localeCompare(b));

console.log(cars);