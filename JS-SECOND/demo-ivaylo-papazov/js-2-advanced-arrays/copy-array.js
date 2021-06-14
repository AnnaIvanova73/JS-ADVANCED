letcars=['BMW','Audi','Opel'];

let clonedCars = [];

// Iterative approach
for (let i = 0; i < cars.length; i++) {
    clonedCars[i] = cars[i];
}

console.log(clonedCars);

// Use destructuring
let [...copiedCars] = cars; // Rest operator

console.log(copiedCars);

// Spread operator 
let copiedCars2 = [...cars]; // Spread operator

// Use slice
let copiedCars3 = cars.slice(); // Array with new referece

// Use concat // Dont use :)
let copiedCars4 = cars.concat([]);

