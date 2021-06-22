class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    };

    addCar(carModel, carNumber) {
        if (this.capacity === this.vehicles.length) {
            throw new Error(`Not enough parking space.`)
        }
        this.vehicles.push({carModel, carNumber, payed: false});
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    };

    removeCar(carNumber) {
        let currNumber = this.vehicles.filter(v => v.carNumber === carNumber);
        if (currNumber.length === 0) {
            throw new Error('The car, you\'re looking for, is not found.');
        }
        if (currNumber[0].payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        this.vehicles = this.vehicles.filter(v => v.carNumber !== carNumber);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let currCar = this.vehicles.filter(v => v.carNumber === carNumber);
        if (currCar.length === 0) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (currCar[0].payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        currCar[0].payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber = 0) {

        if (carNumber === 0) {
            let output = this.vehicles.sort((a, b) => a.carModel - b.carModel)
                .map(e => `${e.carModel} == ${e.carNumber} - ${e.payed ? `Has payed` : `Not payed`}`);
            output.unshift(`The Parking Lot has ${Math.abs(this.vehicles.length - this.capacity)} empty spots left.`)
            return output.join('\n');
        } else {
            let currVehicle = this.vehicles.filter(v => v.carNumber === carNumber);
            return `${currVehicle[0].carModel} == ${currVehicle[0].carNumber} - ${currVehicle[0].payed ? `Has payed` : `Not payed`}`
        }
    }
}

const parking = new Parking(12);


console.log(parking.addCar("Volvo t600", "TX3691CA"));

console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));

console.log(parking.removeCar("TX3691CA"));