let person = {
    name: 'Pesho',
    age: 22,
};

let employee = Object.create(person); // Create new object adds prototype person

console.log(employee.__proto__);

let employee2 = Object.assign({}, person) // creates  new object without person as prototype just clone

console.log(employee2.__proto__);