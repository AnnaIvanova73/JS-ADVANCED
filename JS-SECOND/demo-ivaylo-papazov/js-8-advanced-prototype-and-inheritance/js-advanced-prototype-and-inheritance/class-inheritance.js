class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, age, department, id) {
        super(name, age);

        this.department = department;
        this.id = id;
    }

    showId() {
        console.log(`${this.name} has an Id of ${this.id}`);
    }
}

let person = new Person('Gosho', 10);
let employee = new Employee('Pesho', 20, 'IT', 111);
person.greet();
employee.greet();

employee.showId();