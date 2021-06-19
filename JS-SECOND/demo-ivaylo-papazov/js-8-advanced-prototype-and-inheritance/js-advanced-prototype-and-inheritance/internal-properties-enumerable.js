let person = {
    name: 'Pesho',
    age: 20,
    hobby: 'football',
};

// Add not numerable property
Object.defineProperty(person, 'grades', {
    // Internal properties
    enumerable: false,
    value: [2,3,4,5,6],
});

// Change existing property
Object.defineProperty(person, 'hobby', {
    enumerable: false,
});

// Object.defineProperties(person, {
//     name: {
//         enumerable: true
//     },
//     hobby: {
//         enumerable: true
//     }
// })

// Enumerate properties
for (const prop in person) {
    console.log(`${prop} -> ${person[prop]}`);
}

let keys = Object.keys(person);
console.log(keys);

console.log('Not in for in loop:', person.grades);

// Get current internal properties of a property
let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
