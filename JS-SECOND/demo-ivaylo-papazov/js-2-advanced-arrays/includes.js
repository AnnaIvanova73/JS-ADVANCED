let cars = ["BMW", "Honda", "Hunday", "Mercedes", "Opel", "Audi"]
let favouriteCar = 'Audi';

if (cars.includes(favouriteCar, -3)) {
    console.log('Yeyyyh');
} else {
    console.log('Nooooooo!');
}

// indexOf
let carPosition = cars.indexOf(favouriteCar);
console.log(carPosition);
