// Value type
let number = 5;

let secondNumber = number;

number = 10;

console.log(secondNumber);


// Reference Type
let cars = ['BMW', 'Audi', 'Opel'];
let clonedCars = cars; // Don't use for clone

clonedCars[0] = 'Mercedes';

console.log(clonedCars);
console.log(cars);
