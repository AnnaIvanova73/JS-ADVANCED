function solve() {
    let persons = [
        {firstName: 'Anna', lastName: 'Simpson', age: 22, email: 'anna@yahoo.com'},
        {firstName: 'SoftUni'},
        {firstName: 'Stephan', lastName: 'Johnson', age: 25},
        {firstName: 'Gabriel', lastName: 'Peterson', age: 24, email: 'g.p@gmail.com'},
    ];

    persons = persons.map(createPerson);

    function createPerson({firstName, lastName, age, email}) {
        class Person {
            constructor(firstName, lastName, age, email) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.email = email;
            }

            toString() {
                return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
            }
        }

        return new Person(firstName, lastName, age, email);
    }

    return persons;
}

function solve1() {
    let persons = [
        {firstName: 'Anna', lastName: 'Simpson', age: 22, email: 'anna@yahoo.com'},
        {firstName: 'SoftUni'},
        {firstName: 'Stephan', lastName: 'Johnson', age: 25},
        {firstName: 'Gabriel', lastName: 'Peterson', age: 24, email: 'g.p@gmail.com'},
    ];

    persons = persons.map(e => new Person(e));

    function Person({firstName, lastName, age, email}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

        this.toString = function () {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        };
    }

    return persons;
}

function solve2() {
    let persons = [
        {firstName: 'Anna', lastName: 'Simpson', age: 22, email: 'anna@yahoo.com'},
        {firstName: 'SoftUni'},
        {firstName: 'Stephan', lastName: 'Johnson', age: 25},
        {firstName: 'Gabriel', lastName: 'Peterson', age: 24, email: 'g.p@gmail.com'},
    ];

    class Person {
        constructor({firstName, lastName, age, email}) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        };
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        };
    }

    persons = persons.map(e => new Person(e));
    return persons;
}

//console.log(solve());
//console.log(solve1());
console.log(solve2());