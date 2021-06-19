function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name}`);
};

// Simulation of new keyword
function newKeyword(constructor, ...params) {
    let newObject = {};

    constructor.apply(newObject, params);

    Object.setPrototypeOf(newObject, constructor.prototype)

    return newObject;
}


let person = new Person('Pesho', 22);
let person2 = newKeyword(Person, 'Gosho', 18);

console.log(person2.name);
person2.greet();