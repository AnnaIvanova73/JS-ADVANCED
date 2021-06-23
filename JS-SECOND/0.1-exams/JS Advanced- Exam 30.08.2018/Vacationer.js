class Vacationer {
    get fullName() {
        return this._fullName;
    };

    set fullName(value) {
        if (value.length !== 3) {
            throw new Error('Name must include first name, middle name and last name')
        }
        let names = value.some(e => /^[A-Z]{1}[a-z]+$/.test(e) === false);
        if (names) {
            throw new Error('Invalid full name');
        }
        let [firstName, middleName, lastName] = value;
        this._fullName = {firstName, middleName, lastName};
    };

    constructor(names, card) {
        this.fullName = names;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {cardNumber: 1111, expirationDate: "", securityNumber: 111};
        if (card) {
            this.addCreditCardInfo(card);
        }
        this.wishList = [];
    };

    generateIDNumber() {
        let numLastName = ["a", "e", "o", "i", "u"].includes(this.fullName.lastName.charAt(this.fullName.lastName.length - 1)) ? 8 : 7;
        return 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length + String(numLastName);
    };

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error('Missing credit card information');
        }
        let [cardNumber, expirationDate, securityNumber] = input;
        if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number') {
            throw new Error("Invalid credit card details");
        }
        this.creditCard = {cardNumber, expirationDate, securityNumber};
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        let destinations = this.wishList.length === 0 ? 'empty' : this.wishList.join(', ');
        return [
            `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`,
            `ID Number: ${this.idNumber}`, `Wishlist:`, destinations, `Credit Card:`, `Card Number: ${this.creditCard.cardNumber}`,
            `Expiration Date: ${this.creditCard.expirationDate}`, `Security Number: ${this.creditCard.securityNumber}`
        ].join('\n');
    }
}

// let v= new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777])
// let v=  new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777])
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
//console.log(vacationer1)
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);

//console.log(vacationer2)
//Should throw an error (Invalid full name)

try {

    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);

} catch (err) {

    console.log("Error: " + err.message);

}


//Should throw an error (Missing credit card information)

try {

    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);

    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);

} catch (err) {

    console.log("Error: " + err.message);

}


vacationer1.addDestinationToWishList('Spain');

vacationer1.addDestinationToWishList('Germany');

vacationer1.addDestinationToWishList('Bali');


// Return information about the vacationers

console.log(vacationer1.getVacationerInfo());

console.log(vacationer2.getVacationerInfo());





