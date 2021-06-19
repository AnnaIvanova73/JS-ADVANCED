function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name}`);
};

function Employee(name, age, id, department) {
    Person.call(this, name, age);

    this.id = id;
    this.department = department;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.showId = function() {
    console.log(`This is my ID: ${this.id}`);
}

let employee = new Employee('Pesho', 22, 111, 'IT');

console.log(employee);
employee.greet();
employee.showId();

