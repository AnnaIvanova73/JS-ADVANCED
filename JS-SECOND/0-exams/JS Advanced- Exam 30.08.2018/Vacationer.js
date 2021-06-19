class Vacationer {
    constructor(names, params) {
        this.fullName = names;
        this.idNumber = this.generateIDNumber()
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: '',
            securityNumber: 111
        }
        if (params !== undefined ) {
            this.addCreditCardInfo(params);
        }

        this.wishList = [];
    }


    set fullName(value) {
        if (value.length !== 3) {
            throw new Error(`Name must include first name, middle name and last name`)
        }
        let matchedValues = value.filter(e => /^[A-Z]{1}[a-z]+$/.test(e));

        if (matchedValues.length !== 3) {
            throw new Error('Invalid full name');
        }
        let [firstName, middleName, lastName] = value;
        this._fullName = {firstName, middleName, lastName};
    }
    get fullName() {
        return this._fullName;
    }

    generateIDNumber() {
        return 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length +  this._includeVowels(this.fullName.lastName);
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error(`Missing credit card information`)
        }
        let [cardNumber, expirationDate, securityNumber] = input;
        if (!Number.isInteger(cardNumber) || !Number.isInteger(securityNumber)) {
            throw new Error('Invalid credit card details');
        }

        this.creditCard =  {cardNumber, expirationDate, securityNumber}
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error(`Destination already exists in wishlist`);
        }
        this.wishList.push(destination)
        this.wishList.sort((a, b) => a.length - b.length);
    }


    getVacationerInfo() {
        return [
            `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`,
            `ID Number: ${this.idNumber}`, `Wishlist:`,
            `${this.wishList.length === 0 ? 'empty' : this.wishList.join(', ')}`,
            'Credit Card:', `Card Number: ${this.creditCard.cardNumber}`,
            `Expiration Date: ${this.creditCard.expirationDate}`, `Security Number: ${this.creditCard.securityNumber}`
        ].join('\n');
    }

    _includeVowels(lastName) {
        return ['a', 'e', 'o', 'i', 'u'].includes(lastName.charAt(lastName.length - 1)) ? '8' : '7';
    }
}

//let v= new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777])
//let v=  new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777])
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);

let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);


// Should throw an error (Invalid full name)

try {

    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);

} catch (err) {

    console.log("Error: " + err.message);

}



// Should throw an error (Missing credit card information)

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
/*
class Vacationer {

    constructor(fullName, args) {
        let rgx = /^[A-Z]{1}[a-z]+$/gm;
        let matchedArr = fullName.filter(el => el.match(rgx));
        if (fullName.length !== 3) {
            throw new Error("Name must include first name, middle name and last name")
        }
        if (matchedArr.length !== 3) {
            throw new Error("Invalid full name")
        }
        this.fullName = {firstName: fullName[0], middleName: fullName[1], lastName: fullName[2]}
        this.idNumber = this.generateIDNumber()
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: '',
            securityNumber: 111
        }

        if (args === undefined ) {
            this.creditCard = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }

        }else{
            if (args.length !== 3) {
                throw new Error('Missing credit card information');
            }
            if (!Number.isInteger(args[0]) || !Number.isInteger(args[2])) {
                throw new Error('Invalid credit card details');
            }
            this.creditCard.cardNumber = args[0];
            this.creditCard.expirationDate = args[1];
            this.creditCard.securityNumber = args[2];
        }
        this.wishList = [];
    }

    generateIDNumber() {
        const vowels = ["a", "e", "o", "i", "u"];
        let finNum = vowels.includes(this.fullName.lastName.charAt(this.fullName.lastName.length - 1)) ? '8' : '7';
        return 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length + finNum;
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error('Missing credit card information');
        }
        if (!Number.isInteger(input[0]) || !Number.isInteger(input[2])) {
            throw new Error('Invalid credit card details');
        }
        this.creditCard.cardNumber = input[0];
        this.creditCard.expirationDate = input[1];
        this.creditCard.securityNumber = input[2];

    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist')
        }
        this.wishList.push(destination)
        this.wishList.sort((d1, d2) => d1.length - d2.length)
    }

    getVacationerInfo() {
        return [
            `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`,
            `ID Number: ${this.idNumber}`, `Wishlist:`,
            `${this.wishList.length === 0 ? 'empty' : this.wishList.join(', ')}`,
            'Credit Card:', `Card Number: ${this.creditCard.cardNumber}`,
            `Expiration Date: ${this.creditCard.expirationDate}`, `Security Number: ${this.creditCard.securityNumber}`
        ].join('\n');

    }
}
 */



