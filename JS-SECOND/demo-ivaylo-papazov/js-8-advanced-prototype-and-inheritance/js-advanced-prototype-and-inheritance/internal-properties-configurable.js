let person = {
    name: 'Pesho',
    age: 20,
    hobby: 'football',
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// Set configurable to false
Object.defineProperty(person, 'name', {
    configurable: false
});

Object.defineProperty(person, 'name', {
    value: 'Gosho'
});

Object.defineProperty(person, 'name', {
    writable: false
});

// Object.defineProperty(person, 'name', {
//     enumerable: false
// });

delete person.name; // cannot delete when configurable is false
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
