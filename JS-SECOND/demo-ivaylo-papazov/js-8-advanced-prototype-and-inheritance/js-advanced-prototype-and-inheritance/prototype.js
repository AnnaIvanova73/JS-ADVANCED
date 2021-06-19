
let person = {
    name: 'Pesho Goshev',
    age: 22,
    greet() {
        console.log(`Hello my name is ${this.name}`);
    }
}

let employee = {
    employeeId: 111,
    department: 'development'
};

Object.setPrototypeOf(employee, person);

console.log(employee);
console.log(employee.__proto__);
console.log(Object.getPrototypeOf(employee));

// Use prototype property
console.log(employee.name);

// Loop thorugh all properties including prototype's
for (const key in employee) {
    if (employee.hasOwnProperty(key)) {
        console.log('Own property: ', key);
    } else {
        console.log('Prototype\'s property', key);
    }
} 

// Calling method of the prototype
employee.greet();
