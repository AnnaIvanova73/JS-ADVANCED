function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.greet = function() {
    //     console.log(`Hi, my name is ${this.name}`);
    // }; Don't use this way!!!
}

Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name}`);
};

let person = new Person('Pesho', 20);
let person2 = new Person('Gosho', 22);

person.greet();
person2.greet();

console.log('Employee --->');

let employeePrototype = {
    employer: 'Softuni',
    sayHi: function() {
        console.log('Hiii');
    }
}

function Employee(id, department) {
    this.id = id;
    this.department = department;
}

Employee.prototype = employeePrototype;

let employee = new Employee('1010', 'IT');

employee.sayHi()