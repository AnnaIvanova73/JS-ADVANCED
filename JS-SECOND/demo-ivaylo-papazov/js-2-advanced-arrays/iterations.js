let cars = ["BMW", "Honda", "Hunday", "Mercedes", "Opel", "Audi"];

for (let car of cars) {
    console.log(car);
}

// forEach
function printCar(car) {
    console.log(`Car name is ${car} ---`);
}

cars.forEach(printCar) // use function reference
cars.forEach((car, i) => { // Use arrow funciton
    console.log(`car ${i + 1} ${car}!`);
});

// Some
let hasCarWithA = cars.some((car) => {
    return car[0] == 'A';
});

console.log(hasCarWithA);

if (cars.some(x => x[0] == 'A')) {
    console.log('Yeeeyy there is');
}

// Find
let carWithA = cars.find(x => x[0] == 'A');
console.log(carWithA);

// Filter
let filterdCars = cars.filter(x => !x.startsWith('H'));
console.log(filterdCars);

// Map
let lowerCaseCars = cars.map(x => x.toLowerCase());
console.log(lowerCaseCars);
console.log(cars);

// Chaining
let names = ['Pesho', 'Gosho', undefined, 'Mariyka', undefined];
let resultNames = names
    .filter(x => x) // same as .filter(x => x != undefined)
    .join(',');

console.log(resultNames);
