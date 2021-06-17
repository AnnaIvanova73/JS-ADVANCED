class Parking {
    constructor(number) {
        this.capacity = number;
        this.vehicles = [];
    };

    addCar(carModel, carNumber) {
        this._isEnoughCapacity();
        this.vehicles.push({carModel: carModel, carNumber: carNumber, payed: false});
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    };

    removeCar(carNumber) {
        if (!this._findVehicle(carNumber)) {
            throw new Error("The car, you're looking for, is not found.");
        }
        if (!this._findVehicle(carNumber).payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        this.vehicles = this.vehicles.filter(v => v.carNumber !== carNumber);
        return `${carNumber} left the parking lot.`
    };

    pay(carNumber) {
        if (!this._findVehicle(carNumber)) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (this._findVehicle(carNumber).payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        this._findVehicle(carNumber).payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    };

    getStatistics(carNumber = 0){
       return carNumber  === 0 ? this. _getAllInfoParking() : this._printVehicle(carNumber);
    };


    _printVehicle(carNumber){
        let vehicle = this._findVehicle(carNumber);
        return `${vehicle.carModel} == ${vehicle.carNumber} - ${vehicle.payed ? 'Has payed' : 'Not payed'}`
    };
    _getAllInfoParking(){
        let print = this.vehicles.sort((a,b)=> a.carModel.localeCompare(b.carModel))
            .map(v => `${v.carModel} == ${v.carNumber} - ${v.payed ? 'Has payed' : 'Not payed'}`);
        print.unshift(`The Parking Lot has ${Math.abs(this.vehicles.length - this.capacity)} empty spots left.`);
        return print.join('\n');
    };
    _isEnoughCapacity() {
        if (this.vehicles.length === this.capacity) {
            throw new Error("Not enough parking space.");
        }
    };
    _findVehicle(regNumber) {
        return this.vehicles.find(vehicle => vehicle.carNumber === regNumber);
    };
}

const parking = new Parking(12);



console.log(parking.addCar("Volvo t600", "TX3691CA"));

console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));

console.log(parking.removeCar("TX3691CA"));