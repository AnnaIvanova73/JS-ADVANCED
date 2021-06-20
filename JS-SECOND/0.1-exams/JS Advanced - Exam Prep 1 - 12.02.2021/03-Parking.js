class Parking {

}

const parking = new Parking(12);



console.log(parking.addCar("Volvo t600", "TX3691CA"));

console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));

console.log(parking.removeCar("TX3691CA"));