class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    static sayHello() {
        console.log(`Hello`);
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

// Instanceof operator
console.log(person instanceof Person);
console.log(typeof person);

// Static methods
// person.sayHello() // Doesnt work
Person.sayHello();

module.exports = Person;


